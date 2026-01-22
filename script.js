const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  input.value = "";

  showTyping();

  setTimeout(() => {
    removeTyping();
    const reply = getBotReply(text);
    typeBotMessage(reply);
  }, 1200);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {
  const typing = document.createElement("div");
  typing.classList.add("message", "bot");
  typing.id = "typing";
  typing.innerText = "Typing...";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

function typeBotMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("message", "bot");
  chatBox.appendChild(msg);

  let i = 0;
  const interval = setInterval(() => {
    msg.innerText += text.charAt(i);
    i++;
    chatBox.scrollTop = chatBox.scrollHeight;
    if (i >= text.length) clearInterval(interval);
  }, 30);
}

function getBotReply(userText) {
  userText = userText.toLowerCase();

  if (userText.includes("hello") || userText.includes("hi")) {
    return "Hey 😊 I’m here. Tell me what’s on your mind.";
  }
  if (userText.includes("sad")) {
    return "I’m really sorry you’re feeling this way 💔 Wanna talk about it?";
  }
  if (userText.includes("love")) {
    return "Love is beautiful… and complicated too 💫";
  }
  if (userText.includes("help")) {
    return "Of course. I’m here to help you 🤍";
  }

  return "Hmm… tell me more. I’m listening 👀";
}
