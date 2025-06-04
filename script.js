// Load saved theme from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.remove("lighttheme");
    document.body.classList.add("darktheme");
    document.querySelector(".themetoggle")?.textContent = "☀️";
    document.querySelector(".themetogglefooter")?.textContent = "☀️";
  } else {
    document.body.classList.remove("darktheme");
    document.body.classList.add("lighttheme");
    document.querySelector(".themetoggle")?.textContent = "🌙";
    document.querySelector(".themetogglefooter")?.textContent = "🌙";
  }
});

// Toggle theme and save preference
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains("darktheme");

  if (isDark) {
    body.classList.remove("darktheme");
    body.classList.add("lighttheme");
    document.querySelector(".themetoggle").textContent = "🌙";
    document.querySelector(".themetogglefooter").textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("lighttheme");
    body.classList.add("darktheme");
    document.querySelector(".themetoggle").textContent = "☀️";
    document.querySelector(".themetogglefooter").textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

// Chatbot functions
function openChatbot() {
  const modal = document.getElementById("chatbotModal");
  if (modal) modal.style.display = "block";
}

function closeChatbot() {
  const modal = document.getElementById("chatbotModal");
  if (modal) modal.style.display = "none";
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

// Smart Chatbot Logic with Knowledge Base
function sendMessage() {
  const input = document.querySelector(".chatbotbody input");
  if (!input) return;

  let question = input.value.trim().toLowerCase();

  // Responses based on keywords
  let response = "";

  if (!question) return;

  if (question.includes("hello") || question.includes("hi")) {
    response = "Hello! 👋 I'm GpopzBot — your personal assistant here at GpopzRaw. How can I help you today?";
  } else if (question.includes("haroon") && question.includes("who")) {
    response = "Haroon Ahmad Amin is a self-taught developer, educator, and tech enthusiast who builds digital dreams through web development, AI, education, and creative media.";
  } else if (question.includes("web") && question.includes("development")) {
    response = "GpopzRaw offers fullstack development — building fast, scalable, and responsive websites or applications using the latest tools like React, Node.js, Express, MongoDB, and more.";
  } else if (question.includes("ai") || question.includes("automation")) {
    response = "We develop smart bots, chatbots, automation scripts, and AI-powered systems that adapt to your needs and scale with your business.";
  } else if (question.includes("education") || question.includes("tutorial")) {
    response = "We create engaging tutorials, video lessons, and interactive guides to help people learn tech skills effectively.";
  } else if (question.includes("cybersecurity")) {
    response = "Learn how to secure your systems, protect sensitive data, and implement best practices to stay safe online.";
  } else if (question.includes("podcast") || question.includes("media")) {
    response = "We create high-quality podcasts and digital content that connects with audiences around the world.";
  } else if (question.includes("contact") || question.includes("email")) {
    response = "You can reach Haroon via email at haroon@bluesapphire.com.ng or WhatsApp +2347088886028.";
  } else if (question.includes("location")) {
    response = "Haroon is based at No.8 Karewa Maskare, Yola-Jimeta, Adamawa State, Nigeria.";
  } else if (question.includes("portfolio") || question.includes("projects")) {
    response = "Explore Haroon's projects on his portfolio page — from web apps to educational content and podcast setups.";
  } else if (question.includes("services")) {
    response = "GpopzRaw offers web development, AI automation, education, cybersecurity, and podcasting services.";
  } else if (question.includes("school") || question.includes("education project")) {
    response = "Haroon is building a futuristic school near River Benue with AI tutors, LED walkways, solar power, and immersive learning labs.";
  } else if (question.includes("drone") || question.includes("metal detector")) {
    response = "Haroon has built experimental devices like metal detectors using Arduino, IRF540 transistors, op-amps, and sensor coils.";
  } else if (question.includes("open source") || question.includes("github")) {
    response = "Yes! Many of Haroon’s tools are open-sourced. Visit GitHub and search for 'gpopzraw9' to see the code.";
  } else {
    response = "I'm still learning! Try asking:\n\n- Who is Haroon?\n- What do you offer?\n- Tell me about AI tools.\n- How can I contact you?";
  }

  alert(response);
  speak(response); // Speak the answer
  input.value = "";
}

// 🔊 Text-to-Speech Function
function speak(text) {
  if ('speechSynthesis' in window) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  } else {
    console.warn("Speech synthesis not supported in this browser.");
  }
}

// 🎙️ Speech Recognition (Voice Input)
let recognition;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.querySelector(".chatbotbody input").value = transcript;
    sendMessage(); // Trigger chatbot response
  };

  recognition.onerror = function(event) {
    alert("Voice recognition error: " + event.error);
  };
} else {
  console.warn("Speech Recognition not supported.");
}

// Start voice input
function startVoiceInput() {
  if (!recognition) {
    alert("Your browser doesn't support voice input.");
    return;
  }
  recognition.start();
}
