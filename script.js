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
  let userQuestion = input.value.trim().toLowerCase();

  if (!userQuestion) return;

  // Normalize question
  userQuestion = userQuestion.replace(/[^\w\s]/g, "");

  // Helper: Match keywords in question
  function hasKeyword(keywords) {
    return keywords.some(word => userQuestion.includes(word));
  }

  // Responses by category
  let response = "";

  // 1. About Haroon
  if (hasKeyword(["haroon", "who", "bio", "founder", "developer", "engineer", "profile"])) {
    response = `Haroon Ahmad Amin is a visionary full-stack developer, AI researcher, drone engineer, immersive educator, and founder of Blue Sapphire Security Limited and GpopzRaw Studio. He's on a mission to empower communities in Nigeria — and across Africa — through technology, innovation, and self-reliance.`;

  // 2. Services
  } else if (hasKeyword(["services", "offer", "can you do", "solutions", "business"])) {
    response = `Haroon offers solutions in full-stack development, AI chatbot systems, web apps, immersive learning platforms, cybersecurity guidance, podcasting support, drone technologies, and educational consultancy.`;

  // 3. Web Development
  } else if (hasKeyword(["web", "website", "app", "developer", "frontend", "backend", "react", "node", "tailwind", "api"])) {
    response = `Haroon builds secure, scalable, and modern full-stack applications using technologies like React, Node.js, MongoDB, Tailwind CSS, Express, and various REST/GraphQL APIs. From wireframe to deployment, you get end-to-end solutions — including authentication, payment gateways, dashboards, and smart automation.`;

  // 4. AI & Automation
  } else if (hasKeyword(["ai", "chatbot", "automation", "gpt", "gemini", "agent", "smart tools", "model", "llm"])) {
    response = `Haroon builds custom AI tools using OpenAI, Gemini 2.0, and E2B agents — powering immersive experiences like AI tutors, productivity bots, voice-enabled interfaces, and intelligent assistants.`;

  // 5. Drone & Embedded Systems
  } else if (hasKeyword(["drone", "arduino", "embedded", "metal detector", "ground radar", "uno", "gps", "sensor"])) {
    response = `Haroon has built experimental devices like metal detectors using Arduino, IRF540 transistors, op-amps, 555 timers, and sensor coils — with future plans to integrate GPS and GPR chips for real-time underground mineral mapping.`;

  // 6. Education & Tutorials
  } else if (hasKeyword(["education", "tutorial", "learning", "course", "teach", "school", "platform", "tutor", "critical thinking"])) {
    response = `Haroon is building a school in Yola that blends physical and digital infrastructure — featuring smart classrooms, AI tutors, solar energy, LED lighting, and a garden-based learning lab.`;

  // 7. Cybersecurity
  } else if (hasKeyword(["security", "cyber", "phishing", "safe", "privacy", "hack", "attack", "vpn", "network"])) {
    response = `Haroon offers cybersecurity audits, secure architecture design, and best practices training to individuals and organizations. He helps protect sensitive data, understand phishing threats, manage passwords securely, and implement device/network protection.`;

  // 8. Podcasting & Media
  } else if (hasKeyword(["podcast", "jellypod", "voice", "media", "recording", "audio", "corruption", "history", "awakening"])) {
    response = `Haroon runs two podcasts: ‘Digital Shadows: Crime and Tech Across Borders’ and a Nigerian youth awakening series fighting corruption and injustice. He uses JellyPod with voice cloning and AI hosts to produce immersive audio experiences.`;

  // 9. Projects & Portfolio
  } else if (hasKeyword(["portfolio", "projects", "experiments", "blue sapphire", "school", "metal", "ai app", "gallery"])) {
    response = `Haroon’s portfolio includes immersive learning platforms, AI chatbots, cybersecurity courses, podcast productions, metal detector prototypes, and the masterplan of a tech school near River Benue.`;

  // 10. Website Info
  } else if (hasKeyword(["website", "theme", "responsive", "ux", "design", "interface", "elementor"])) {
    response = `This site supports Dark/Light themes using local storage. Toggle it anytime via the ☀️/🌙 icon. Built using modern responsive design principles, it looks clean and sharp across devices.`;

  // 11. Contact Info
  } else if (hasKeyword(["contact", "phone", "email", "whatsapp", "address", "location", "social"])) {
    response = `Email: haroon@bluesapphire.com.ng | WhatsApp: +2347088886028 | Phone: 07088886028\nLocation: No. 8 Karewa Maskare, Yola-Jimeta, Adamawa State, Nigeria\nFollow: GitHub, LinkedIn, YouTube, Twitter/X – search 'Haroon Ahmad Amin' or 'GpopzRaw'.`;

  // 12. FAQ - General
  } else if (hasKeyword(["faq", "help", "assist", "how can you help", "support", "mentorship"])) {
    response = `Yes! Haroon offers mentorship, tutorials, and learning paths to help developers grow their skills. He also provides one-on-one coaching and custom project development.`;

  // 13. FAQ - Can You Build My App?
  } else if (hasKeyword(["build", "app", "project", "custom", "solution", "create"])) {
    response = `Absolutely! Whether you need a personal website, AI tutor, podcast setup, or security system — Haroon delivers tailored, high-quality solutions aligned with your goals.`;

  // 14. FAQ - Open Source?
  } else if (hasKeyword(["open source", "github", "repo", "code", "contributions"])) {
    response = `Many of Haroon’s projects, especially learning tools and utilities, are open-sourced. Check his GitHub profile or ask him directly for access.`;

  // 15. FAQ - Location / Work With Me
  } else if (hasKeyword(["collaborate", "partner", "work with", "team", "startup"])) {
    response = `Reach out via email at haroon@bluesapphire.com.ng or WhatsApp at +2347088886028. Haroon welcomes partnerships, collaborations, school tech upgrades, podcast ideas, and community-driven innovation.`;

  // Default Fallback
  } else {
    response = `I'm still learning! Let me try to help you.\n\nTry asking about:\n- Who is Haroon?\n- What services do you offer?\n- Tell me about your AI chatbot.\n- How can I contact you?`;
  }

  // Display response
  alert(response);
  input.value = "";
}

// Speak response aloud
function speak(text) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
}
