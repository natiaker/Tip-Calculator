//set initial values
let billAmount = 0;
let tipRate = 0;
let tip = 0;
let totalAmount = 0;

let errorMessage = document.getElementById("error-message");
let format = /^[1-9]+[0-9]*$/;
let heading = document.getElementById("heading");
let billAmountId = document.getElementById("bill-amount-id");
let tipRateId = document.getElementById("tip-rate-id");
let calculateButton = document.getElementById("calculate-button");
let clearButton = document.getElementById("clear-button");
let tipp = document.getElementById("tip-p");
let totalAmountp = document.getElementById("total-amount-p");

document.getElementById("switch-lang").onclick = () => {
    if (heading.innerHTML === "Tip Calculator") {
        heading.innerText = "ჩაის ფულის კალკულატორი";
        billAmountId.innerText = "თანხის ოდენობა(₾)";
        tipRateId.innerText = "ჩაის ფულის პროცენტი(%)";
        calculateButton.innerText = "გამოთვლა";
        clearButton.innerText = "გასუფთავება";
        tipp.innerHTML = `ჩაის ფული: <span id="tip"></span>₾`;
        totalAmountp.innerHTML = `ჯამური თანხა: <span id="total-amount"></span>₾`;
    } else {
        heading.innerText = "Tip Calculator";
        billAmountId.innerText = "Bill Amount($)";
        tipRateId.innerText = "Tip Rate(%)";
        calculateButton.innerText = "Calculate";
        clearButton.innerText = "Clear";
        tipp.innerHTML = `Tip: $<span id="tip">`;
        totalAmountp.innerHTML = `Total Amount: $<span id="total-amount">`;
    }    
    document.getElementById("bill-amount").value = "";
    document.getElementById("tip-rate").value = "";
    errorMessage.innerText = "";
    calculateButton.removeAttribute("style");
}

document.getElementById("calculate-button").onclick = () => {
    billAmount = document.getElementById("bill-amount").value;
    billAmount = parseInt(billAmount);

    tipRate = document.getElementById("tip-rate").value;
    tipRate = parseInt(tipRate);

    tip = (billAmount * (tipRate / 100)).toFixed(2);
    tip = parseFloat(tip);

    totalAmount = billAmount + tip;
    
    document.getElementById("tip").innerHTML = tip;
    document.getElementById("total-amount").innerHTML = totalAmount;
}

document.getElementById("clear-button").onclick = () => {
    document.getElementById("bill-amount").value = "";
    document.getElementById("tip-rate").value = "";

    document.getElementById("tip").innerHTML =  "";
    document.getElementById("total-amount").innerHTML = "";

    errorMessage.innerText = "";
    calculateButton.removeAttribute("style");
}

function validateNumbers() {
    if( !document.getElementById("bill-amount").value.match(format) || !document.getElementById("tip-rate").value.match(format)){
        if (heading.innerHTML === "Tip Calculator") {  
            errorMessage.innerHTML = "Fill in both fields. <br> You can use only positive numbers"; 
        } else {
            errorMessage.innerHTML = "შეავსეთ ორივე ველი. <br> გამოიყენეთ მხოლოდ დადებითი რიცხვები";  
        }
        calculateButton.disabled = true;
        calculateButton.style.background = "grey";
        return false;
    } else {
        errorMessage.innerText = "";
        calculateButton.removeAttribute("style");
        calculateButton.disabled = false;
        return true;
    }
}
