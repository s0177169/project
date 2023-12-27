var currentSum = Number(0);
var utilSum = Number(0);

let prices = new Map([
    ["radio1", 1000],
    ["radio2", 2000],
    ["radio3", 5000],
]);


function updatePriceHolder(){
    const quantity = document.getElementById('countBox');
    const priceHolder = document.getElementById('priceHolder');

    if (!quantity.value || !currentSum)
        return;

    let totalSum = currentSum * quantity.value + utilSum;
    priceHolder.innerHTML = 'Общая сумма: ' + totalSum;
}


function calculateSum(selectedButton){
    let optionSelect = document.getElementById("optionSelect");
    let propertyCheckbox = document.getElementById("propertyCheckbox");

    currentSum = prices.get(selectedButton);
    
    if (selectedButton === 'radio1') {
        optionSelect.style.display = 'none';
        propertyCheckbox.style.display = 'none';
        
    } else if (selectedButton === 'radio2') {
        optionSelect.style.display = 'block';
        propertyCheckbox.style.display = 'none';

        let selectbox = document.getElementById("selectbox");
        utilSum = selectbox.value === '1' ? 500 : 0;
    } else if (selectedButton === 'radio3') {
        optionSelect.style.display = 'none';
        propertyCheckbox.style.display = 'block';
        
        let checkbox = document.getElementById("checkbox");
        utilSum = checkbox.checked ? 10 : 0;
    }

    updatePriceHolder();
}


document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementsByName("countBox")[0].addEventListener('input', function(event) {
        let quant = event.target.value;
        if (!quant.match(/^\d+$/)){
            alert("Количество должно быть целым числом!");
            event.target.value = '';
            document.getElementById('priceHolder').innerHTML = 'Введите количество и/или выберете услугу';
        } else {
            updatePriceHolder();
        }
        
    });
    document.querySelectorAll('input[name="radioButton"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
            calculateSum(event.target.id);
        });
    });

    let selectbox = document.getElementById("selectbox");
    let checkbox = document.getElementById("checkbox");

    selectbox.addEventListener('change', function() {
        calculateSum('radio2');
    });
    checkbox.addEventListener('change', function() {
        calculateSum('radio3');
    });
});