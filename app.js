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


    const walk = 40;

    function changeShadow(e) {
      const [width, height] = [header.offsetWidth, header.offsetHeight + 220];
      let [x, y] =[e.offsetX, e.offsetY];
      
      if (e.target != this) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      } 
      const xWalk = (x / width * walk) - (walk / 2);
      const yWalk = (y / height * walk) - (walk / 2);
      console.log(xWalk, yWalk);

      header.style.textShadow = `${xWalk}px ${yWalk}px 0px aqua, 
      ${xWalk * -1.2}px ${yWalk * -1.2}px 0px red,
      ${xWalk * -2}px ${yWalk}px 0px rgb(23, 250, 23)`;
    }

  