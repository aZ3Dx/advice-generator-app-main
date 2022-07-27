const url = "https://api.adviceslip.com/advice/";
const idTxt = document.querySelector("#id_txt");
const slipTxt = document.querySelector("#slip_txt");

var min = 1;
var max = 224;

function getRandom(){
    let number;
    number = Math.random()*max;
    number = Math.floor(number)+min;
    return number;
}

function callApi(number) {
    fetch(url+number)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
        })
        .then((data) => {
            idTxt.textContent = data.slip.id;
            slipTxt.textContent = data.slip.advice;
        })
        .catch((error) => {
            console.log(error);
        })
}

callApi(getRandom());

function newQuote(e) {
    e.preventDefault();
    callApi(getRandom());
}

const newQuoteBtn = document.querySelector("#new_btn");
newQuoteBtn.addEventListener("click", newQuote, false);