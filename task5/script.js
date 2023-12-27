var totalsum = Number(0);
var cart = new Map();

var lastitem;


function addtext(){
    let cartBlock = document.getElementById("cartBlock");
    let tmp = document.createElement("p");
    tmp.textContent = "Выбранные товары: ";
    tmp.setAttribute("class", "selected-items");
    cartBlock.appendChild(tmp);
}


function clearLastAdded() {
    if (lastitem) {
        lastitem.remove();
    }
}


function add_to_cart(e) {
    e.preventDefault();

    let item = document.getElementsByName("selectbox")[0].value.split('-');
    let itemname = item[0];
    let cost = item[1].replace(/[^0-9]/g,"");
    let count = document.getElementsByName("countbox")[0].value;

    if (!count.match(/^\d+$/)){
        alert("Количество должно быть целым числом!");
        return;
    }

    if (totalsum === 0) {
        addtext();
        document.getElementById("totalsum").textContent = "";
    }
    totalsum += Number(cost) * Number(count);

    // Cart
    if (cart.has(itemname)) {
        clearLastAdded();

        cart.set(itemname, cart.get(itemname) + Number(count));
        document.getElementById(itemname).innerHTML = itemname + " " + cart.get(itemname) + " шт.";
        lastitem.textContent = "";
        
    } else {
        clearLastAdded();

        let cartBlock = document.getElementById("cartBlock");
        let newElement = document.createElement("li");
        newElement.setAttribute("id", itemname);
        newElement.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");

        cart.set(itemname, Number(count));
        newElement.textContent = itemname + " " + count + " шт.";

        let newBanner = document.createElement("span");
        newBanner.setAttribute("class", "badge badge-primary badge-pill new-item");
        newBanner.textContent = "new";

        newElement.appendChild(newBanner);
        cartBlock.appendChild(newElement);

        lastitem = newBanner;
    }
}


function checkout(e) {
    e.preventDefault();
    
    if (totalsum === 0) {
        let item = document.getElementsByName("selectbox")[0].value.split('-');
        let itemname = item[0];

        let cost = item[1].replace(/[^0-9]/g,"");
        let count = document.getElementsByName("countbox")[0].value;

        if (!count.match(/^\d+$/)){
            alert("Количество должно быть целым числом!");
            return;
        }

        document.getElementById("totalsum").textContent = "Общая сумма заказа: " + Number(cost) * Number(count) + " руб.";
    } else {

        document.getElementById("cartBlock").innerHTML = "";
        document.getElementById("totalsum").textContent = "Общая сумма заказа: " + totalsum + " руб.";
        
        totalsum = 0;
        cart = new Map();
    }
}


window.onload=function(){
    var myForm = document.getElementsByName("myForm")[0];
    myForm.addEventListener("submit", add_to_cart);
    myForm.addEventListener("reset", checkout);
}

