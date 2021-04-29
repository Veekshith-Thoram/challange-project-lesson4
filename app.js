var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate);
var textInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");
// console.log(textInput);
var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("An error occurred:",error);
    alert("An error occurred, please try after sometime");
}
function eventHandler(){
var inputValue = textInput.value;
//fetching url
fetch(constructUrl(inputValue))
.then(response => response.json())
.then(json => outputText.innerText=json.contents.translated)
.catch(errorHandler)
}
btnTranslate.addEventListener("click", eventHandler)