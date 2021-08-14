var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const output = document.querySelector('#output');
const body = document.querySelector('body');

var recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-UK';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


body.addEventListener('click', function() {
    recognition.start();
    console.log('Recognition has started');
});


recognition.onresult = (result) => {
    let speechOutput = result.results[0][0].transcript;
    body.style.background = speechOutput;
    output.innerText = `You chose the background as: ${speechOutput}`;
}


recognition.onspeechend = function() {
    recognition.stop();
    console.log('Recognition has stopped');
  }
  //error handling
  recognition.onnomatch = function(event) {
    diagnostic.textContent = "I didn't recognise that color.";
  }
  
  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }