const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(userText);
    addMessage(reply, "bot");
  }, 700);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(text) {
  text = text.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) {
    return "Hey 🙂 main yahin hoon. Batao kya baat hai?";
  }

  if (text.includes("sad") || text.includes("alone")) {
    return "Main samajh sakti hoon 💗 tum akeli nahi ho.";
  }

  if (text.includes("love")) {
    return "Love thoda complex hota hai… par tum strong ho 💫";
  }

  if (text.includes("help")) {
    return "Main hoon na 😊 jo bolna hai bina dar ke bolo.";
  }

  return "Hmm… thoda aur batao, main sun rahi hoon 🌙";
}
