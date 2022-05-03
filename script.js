const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector(".error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const notes = [2000, 500, 50, 20, 10, 1];
//open and close sections
const openCheck = document.querySelector(".open-check");
const openTable = document.querySelector(".open-table");

openTable.style.display = "none";
openCheck.style.display = "none";

nextButton.addEventListener("click", function updateBillAmount() {
  openCheck.style.display = "block";
});
checkButton.addEventListener("click", function updateBillAmountAndCashAmount() {
  openTable.style.display = "none";
  if (billAmount.value > 0) {
    // displayNone();
    openTable.style.display = "block";
    if (Number(cashAmount.value) >= Number(billAmount.value)) {
      errorMessage.innerText=`cash Amount is ${cashAmount.value} and Bill amount is ${ billAmount.value}`;
      
      let amountToBeReturned = cashAmount.value - billAmount.value;
     
      calculateChange(amountToBeReturned);
     
    } else {
      displayBlock();
      message("Give more money");
      openTable.style.display ="none";
    }
  } else {
    displayBlock();
    message("Please enter an amount greater than 0");
  }
  
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    let change = Math.trunc(amountToBeReturned / notes[i]);
    amountToBeReturned %= notes[i];
    noOfNotes[i].innerText = change;
    billAmount.value = "";
    cashAmount.value = "";
  }
}

function message(msg) {
  errorMessage.innerText = msg;
}
function displayNone() {
  errorMessage.style.display = "none";
}
function displayBlock() {
    errorMessage.style.display = "block";
}
