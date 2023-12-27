const ENDPOINT_URL = "https://formcarry.com/s/s2nSOo1EgY";

const modal = $('#modalDialog');
const btn = $("#mbtn");
const span = $(".close");


function hashtagCheckForm(e){
    if (location.hash.slice(1) == 'form') {
        modal.show();
    }
}


$(document).ready(function(){
    $(window).on('hashchange', hashtagCheckForm);
    btn.on('click', function() {
        modal.show();
        history.pushState(null, null, '#form');
    });
    span.on('click', function() {
        modal.hide();
        history.pushState(null, null, '/task8/');
    });
});


$('body').bind('click', function(e){
    if($(e.target).hasClass("modal")){
        modal.hide();
        history.pushState(null, null, '/task8/');
    }
});


async function formSubmitHandler(e) {
    e.preventDefault();
    const responseOutput = document.getElementById("response");
    responseOutput.innerHTML = "";
    responseOutput.setAttribute("class", "")

    const loader = document.querySelector("#loading");
    loader.classList.add("display");

    let formData = {};
    document.querySelectorAll('.form-control').forEach((elem) => {
        formData[elem.name] = elem.value;
    });
    const response = await fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    })
    .then((response) => {
        if (response.status == 200) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
    .then((responseJson) => {
        loader.classList.remove("display");
        responseOutput.innerHTML = 'Мы получили вашу форму, спасибо!';
        responseOutput.classList.add("text-success");
        localStorage.clear();
    })
    .catch((error) => {
        loader.classList.remove("display");
        responseOutput.innerHTML = 'Возникла ошибка при отправке формы';
        responseOutput.classList.add("text-danger");
    });
}


function setInputValuesFromLocalStorage(e) {
    document.getElementById('fio').setAttribute('value', localStorage.getItem('fio') || '');
    document.getElementById('emails').setAttribute('value', localStorage.getItem('emails') || '');
    document.getElementById('telep').setAttribute('value', localStorage.getItem('telep') || '');
    document.getElementById('org').setAttribute('value', localStorage.getItem('org') || '');
    document.getElementById('message').textContent = (localStorage.getItem('message') || '');
    document.getElementById("policy").checked = (localStorage.getItem('policy') || false);
}


function inputHandler(e) {
    let id = e.target.id;
    let value = e.target.value;
    localStorage.setItem(id, value);
}


document.addEventListener("DOMContentLoaded", (event) => {
    setInputValuesFromLocalStorage();
    hashtagCheckForm();

    document.getElementById("contactFrm").addEventListener('submit', formSubmitHandler);
    document.querySelectorAll('.form-control').forEach((elem) => {
        elem.addEventListener("input", inputHandler);
    });

    document.getElementById("policy").addEventListener('change', function(event) {
        if (event.target.checked) {
            localStorage.setItem('policy', true);
        } else {
            localStorage.removeItem('policy');
        }
    });
});
