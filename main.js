const startBtn = document.getElementById("startBtn");
const spokenText = document.getElementById("spokenText");
const codeOutput = document.getElementById("codeOutput");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Your browser does not support Speech Recognition.");
}

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = false;

startBtn.addEventListener("click", () => {
  recognition.start();
  startBtn.textContent = "🎙️ Listening...";
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript.trim();
  spokenText.textContent = transcript;
  const code = fakeCodeGeexAPI(transcript);
  codeOutput.textContent = code;
  startBtn.textContent = "🎤 Start Talking";
};

recognition.onerror = (event) => {
  alert("Speech error: " + event.error);
  startBtn.textContent = "🎤 Start Talking";
};

// Fake CodeGeex logic for demo
function fakeCodeGeexAPI(prompt) {
  prompt = prompt.toLowerCase();

  if (prompt.includes("reverse a string")) {
    return `function reverseString(str) {
  return str.split('').reverse().join('');
}`;
  }

  if (prompt.includes("factorial")) {
    return `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`;
  }

  if (prompt.includes("fibonacci")) {
    return `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
  }

  if (prompt.includes("sum two numbers") || prompt.includes("add two numbers")) {
    return `function sum(a, b) {
  return a + b;
}`;
  }

  return "// Sorry, I don't know how to generate that yet.";
}
