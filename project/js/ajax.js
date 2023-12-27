const ENDPOINT_URL = "https://formcarry.com/s/s2nSOo1EgY";

async function formSubmitHandler(e) {
    e.preventDefault();

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
    localStorage.clear();
}


function setInputValuesFromLocalStorage(e) {
    document.getElementById('name').setAttribute('value', localStorage.getItem('name') || '');
    document.getElementById('emails').setAttribute('value', localStorage.getItem('emails') || '');
    document.getElementById('telep').setAttribute('value', localStorage.getItem('telep') || '');
    document.getElementById('comment').textContent = (localStorage.getItem('comment') || '');
}


function inputHandler(e) {
    let id = e.target.id;
    let value = e.target.value;
    localStorage.setItem(id, value);
}


document.addEventListener("DOMContentLoaded", (event) => {
    setInputValuesFromLocalStorage();

    document.getElementById("contactFrm").addEventListener('submit', formSubmitHandler);
    document.querySelectorAll('.form-control').forEach((elem) => {
        elem.addEventListener("input", inputHandler);
    });
});
