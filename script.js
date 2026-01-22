// ================== SOUL.NEST BRAIN ==================

function detectLanguage(text) {
  if (/[अ-ह]/.test(text)) return "hi";
  if (/hai|nahi|kyu|kaise|mera|tum|mujhe|lagta/.test(text)) return "hi";
  return "en";
}

function getReply(userInput) {
  const text = userInput.toLowerCase();
  const lang = detectLanguage(text);

  // ========== EMOTIONS ==========
  if (/sad|cry|hurt|alone|breakup|miss|depressed|ro/.test(text)) {
    return lang === "hi"
      ? "Lagta hai dil bohot bhaari hai… main yahin hoon 🤍 bol do"
      : "That sounds really heavy… I’m here with you 🫂";
  }

  if (/anxiety|panic|fear|dar|ghabrahat|overthink/.test(text)) {
    return lang === "hi"
      ? "Thoda sa saans lo… abhi tum safe ho 🌸"
      : "Take a slow breath… you’re safe right now 🌙";
  }

  if (/happy|excited|khush|acha lag/.test(text)) {
    return lang === "hi"
      ? "Yeh sunke achha laga 💗 thoda aur batao"
      : "That’s really nice to hear 💙 tell me more";
  }

  // ========== LOVE / RELATIONSHIP ==========
  if (/love|pyar|relationship|crush|boyfriend|girlfriend/.test(text)) {
    return lang === "hi"
      ? "Pyaar simple nahi hota… dil jaldi jud jaata hai 💞"
      : "Love can be confusing… feelings don’t follow logic 💭";
  }

  // ========== STUDY / CAREER ==========
  if (/study|exam|career|job|future|college|padhai/.test(text)) {
    return lang === "hi"
      ? "Pressure lag raha hai lagta hai… ek ek step lete hain 📚"
      : "Feels like a lot of pressure… let’s take it step by step 🎯";
  }

  // ========== CODING / TECH ==========
  if (/html|css|js|javascript|error|bug|code|website/.test(text)) {
    return lang === "hi"
      ? "Tech issue lag raha hai 👩‍💻 thoda code ya error bhejo"
      : "Looks like a coding issue 👨‍💻 send the code or error";
  }

  // ========== MONEY / LIFE ==========
  if (/money|pais|finance|loan|earning|future/.test(text)) {
    return lang === "hi"
      ? "Paise ka tension real hota hai… calmly plan karte hain 💰"
      : "Money stress is real… we can plan this calmly 💸";
  }

  // ========== HEALTH (NON-MEDICAL) ==========
  if (/health|tired|thak|sleep|neend/.test(text)) {
    return lang === "hi"
      ? "Lagta hai body rest maang rahi hai 😴 thoda dhyaan rakho"
      : "Sounds like your body needs some rest 😌";
  }

  // ========== QUESTIONS ==========
  if (/why|how|what|kyu|kaise|kya/.test(text)) {
    return lang === "hi"
      ? "Achha sawaal hai 🤔 thoda detail do"
      : "That’s a good question 🤔 can you explain a bit more?";
  }

  // ========== DEFAULT HUMAN FEEL ==========
  const softRepliesHi = [
    "Main sun rahi hoon 🌙",
    "Thoda aur batao",
    "Yeh important lag raha hai",
    "Main yahin hoon, bolo",
    "Take your time 🤍"
  ];

  const softRepliesEn = [
    "I’m listening 🌙",
    "Tell me more",
    "That sounds important",
    "I’m here, go on",
    "Take your time 🤍"
  ];

  return lang === "hi"
    ? softRepliesHi[Math.floor(Math.random() * softRepliesHi.length)]
    : softRepliesEn[Math.floor(Math.random() * softRepliesEn.length)];
}

// ================== MESSAGE SEND ==================

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (!input.value.trim()) return;
typing.innerHTML = `
  <span class="typing">
    <span></span>
    <span></span>
    <span></span>
  </span>
`;
  // user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = input.value;
  chatBox.appendChild(userMsg);

  const userText = input.value;
  input.value = "";

  // typing indicator
  const typing = document.createElement("div");
  typing.className = "bot-msg";
  
  chatBox.appendChild(typing);

  setTimeout(() => {
    typing.remove();
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.innerText = getReply(userText);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 900);
}
