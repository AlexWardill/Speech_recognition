const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const result = document.querySelector('#result');
const body = document.querySelector('body');

if (SpeechRecognition !== undefined) {
    let recognition = new SpeechRecognition();
  } else {
    console.warn('sorry not supported 😭');
  }

body.addEventListener('click', function() {
    recognition.start();
    console.log('Recognition has started');
});


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