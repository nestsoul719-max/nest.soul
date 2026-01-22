const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  // typing indicator
  setTimeout(() => {
    addMessage(getAIReply(text), "bot");
  }, 800);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIReply(userText) {
  const replies = [
    "I'm here 🌙 tell me more.",
    "That sounds heavy… I'm listening 💙",
    "You don’t have to face this alone.",
    "Hmm… I feel you 🫂",
    "Take a deep breath, I'm right here."
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}

/* Enter key support */
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
