const output = document.querySelector('#output');
const body = document.querySelector('body');

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  var recognition = new SpeechRecognition();
}
catch (TypeError) {
  output.innerText = "Sorry but this feature is not supported in your browser...";
} 
try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  var recognition = new SpeechRecognition();
}
catch (ReferenceError) {
  output.innerText = "Sorry but this feature is not supported in your browser...";
}

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
    console.log('what on earth did you just say');
    output.innerText = "I didn't recognise that color.";
  }
  
  recognition.onerror = function(event) {
    output.innerText = 'Error occurred in recognition: ' + event.error;
  }


    // Box shadow

    body.addEventListener('mousemove', changeShadow);


    function changeShadow(e) {
      let { offsetX : x, offsetY: y } = e;
      console.log(x, y);
    }