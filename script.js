const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  // User message
  addMessage(text, "user");
  userInput.value = "";

  // Fake AI typing delay
  setTimeout(() => {
    addMessage(getBotReply(), "bot");
  }, 800);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply() {
  const replies = [
    "I'm here with you 🌙",
    "Tell me more, I'm listening 💙",
    "That sounds heavy. You don't have to go through it alone.",
    "It's okay to feel this way 🫂",
    "Take your time. I'm right here."
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// Enter key support
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
