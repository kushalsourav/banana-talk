console.log("hello")

var btnTranslator = document.querySelector('#btn-translator');
var textInput = document.querySelector('#textinput')
var output = document.querySelector('#output');

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/minion.json";


function getTranslator(input) {
    return serverUrl + "?" + "text=" + input
    // for example -- https://api.funtranslations.com/translate/minion.json?text=input 
}

function errorHandler(err) {
    console.log("Error Occured :", err);
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslator(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler);

}


btnTranslator.addEventListener('click', clickHandler)