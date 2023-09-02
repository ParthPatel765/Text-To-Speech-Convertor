// Create a SpeechSynthesisUtterance instance
const speech = new SpeechSynthesisUtterance();

// Define a function to handle button click
function speakText() {
    const textareaValue = document.querySelector("textarea").value;
    speech.text = textareaValue;
    window.speechSynthesis.speak(speech);
}

// Attach the speakText function to the button's click event
document.querySelector("button").addEventListener("click", speakText);
