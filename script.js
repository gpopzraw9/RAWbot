// Load theme from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.remove("lighttheme");
    document.body.classList.add("darktheme");
    document.querySelector(".themetoggle").textContent = "☀️";
    document.querySelector(".themetogglefooter").textContent = "☀️";
  } else {
    document.body.classList.remove("darktheme");
    document.body.classList.add("lighttheme");
    document.querySelector(".themetoggle").textContent = "🌙";
    document.querySelector(".themetogglefooter").textContent = "🌙";
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
  document.getElementById("chatbotModal").style.display = "block";
}

function closeChatbot() {
  document.getElementById("chatbotModal").style.display = "none";
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.querySelector(".chatbotbody input");
  const userQuestion = input.value.trim().toLowerCase();

  if (!userQuestion) return;

  // Simulate bot response based on keywords
  let response = "I'm still learning! Let me try to help you.";

  if (userQuestion.includes("hello") || userQuestion.includes("hi")) {
    response = "Hello! 👋 I'm GpopzBot — your personal assistant here at GpopzRaw. How can I assist you today?";
  } else if (userQuestion.includes("haroon") && userQuestion.includes("who")) {
    response = "Haroon Ahmad Amin is a self-taught developer, educator, and tech enthusiast who builds digital dreams through web development, AI, education, and creative media.";
  } else if (userQuestion.includes("web") && userQuestion.includes("development")) {
    response = "GpopzRaw offers fullstack web development — building fast, scalable, and responsive websites and apps using modern tools and frameworks.";
  } else if (userQuestion.includes("ai") || userQuestion.includes("automation")) {
    response = "We integrate smart bots, automation scripts, and AI systems to streamline tasks and boost productivity.";
  } else if (userQuestion.includes("education") || userQuestion.includes("tutorials")) {
    response = "GpopzRaw creates engaging tutorials, video lessons, and interactive guides to help people learn tech skills effectively.";
  } else if (userQuestion.includes("cybersecurity")) {
    response = "Learn how to secure your systems, protect sensitive data, and implement best practices to stay safe online.";
  } else if (userQuestion.includes("podcast") || userQuestion.includes("media")) {
    response = "We create high-quality podcasts and digital content that connects with audiences around the world.";
  } else if (userQuestion.includes("contact") || userQuestion.includes("email")) {
    response = "You can reach Haroon via email at haroon@bluesapphire.com.ng or WhatsApp +2347088886028.";
  } else if (userQuestion.includes("location")) {
    response = "Haroon is based at No.8 Karewa Maskare, Yola-Jimeta, Adamawa State, Nigeria.";
  } else if (userQuestion.includes("portfolio") || userQuestion.includes("projects")) {
    response = "Explore Haroon's projects on his portfolio page — from web apps to educational content and podcasting setups.";
  } else if (userQuestion.includes("gallery")) {
    response = "Visit the gallery to see some of Haroon's featured work across web development, AI, cybersecurity, and more!";
  } else if (userQuestion.includes("services")) {
    response = "GpopzRaw offers web development, AI automation, education, cybersecurity, and podcasting services.";
  }

  alert(response);
  input.value = "";
}
