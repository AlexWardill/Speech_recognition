var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const result = document.querySelector('#result');
const body = document.querySelector('body');

console.log(new SpeechRecognition());

recognition.continuous = false;
recognition.lang = 'en-UK';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


body.addEventListener('click', function() {
    recognition.start();
    console.log('Recognition has started');
});


recognition.onresult = (e) => {
    console.log(results);
}


recognition.onspeechend = function() {
    recognition.stop();
  }
  //error handling
  recognition.onnomatch = function(event) {
    diagnostic.textContent = "I didn't recognise that color.";
  }
  
  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }