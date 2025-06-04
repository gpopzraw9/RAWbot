// ========= Theme Toggle =========
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

// ========= Chatbot Functions =========
function openChatbot() {
  document.getElementById("chatbotModal").style.display = "flex";
}

function closeChatbot() {
  document.getElementById("chatbotModal").style.display = "none";
}

function sendMessage() {
  const input = document.querySelector(".chatbot-body input");
  const question = input.value.trim();
  if (!question) return;

  // Display user message (optional)
  const response = getBotResponse(question.toLowerCase());
  alert(response); // For now, just show alert
  input.value = "";
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

// Basic Bot Logic (you can expand this later!)
function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hi there! How can I help you today?";
  } else if (input.includes("services")) {
    return "I offer web development, AI tools, cybersecurity guidance, tutorials, and podcasting.";
  } else if (input.includes("haroon")) {
    return "Haroon is a self-taught developer, educator, and creator passionate about tech and innovation.";
  } else if (input.includes("contact")) {
    return "You can reach out via the Contact page or email at hello@gpopzraw.dev";
  } else {
    return "Hmm... I'm still learning. Try asking about services, Haroon, or contact info!";
  }
}

// Function to toggle theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Save theme preference to localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Function to apply saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;

  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
}

// Apply saved theme when the page loads
window.onload = function () {
  applySavedTheme();
};
