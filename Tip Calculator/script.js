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


const lang = {
    'lang-ka': {
        heading: "ჩაის ფულის კალკულატორი",
        billAmountId: "თანხის ოდენობა(₾)",
        tipRateId: "ჩაის ფულის პროცენტი(%)",
        calculateButton: "გამოთვლა",
        clearButton: "გასუფთავება",
        tipp: `ჩაის ფული: <span id="tip"></span>₾`,
        totalAmountp: `ჯამური თანხა: <span id="total-amount"></span>₾`
    },
    'lang-en': {
        heading: "Tip Calculator",
        billAmountId: "Bill Amount($)",
        tipRateId: "Tip Rate(%)",
        calculateButton: "Calculate",
        clearButton: "Clear",
        tipp: `Tip: $<span id="tip">`,
        totalAmountp: `Total Amount: $<span id="total-amount">`
    }
};

document.getElementById("switch-lang").onclick = () => {
    if (heading.getAttribute("class") == "lang-ka") {
        heading.className = "lang-en";
    } else {
        heading.className = "lang-ka";
    }
    heading.innerText = lang[heading.className].heading;
    billAmountId.innerText = lang[heading.className].billAmountId;
    tipRateId.innerText = lang[heading.className].tipRateId;
    calculateButton.innerText = lang[heading.className].calculateButton;
    clearButton.innerText = lang[heading.className].clearButton;
    tipp.innerHTML = lang[heading.className].tipp;
    totalAmountp.innerHTML = lang[heading.className].totalAmountp;

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
        if (heading.getAttribute("class") == "lang-en") {  
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
