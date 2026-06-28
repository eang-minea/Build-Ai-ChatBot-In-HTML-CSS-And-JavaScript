const chatBody = document.querySelector(".chat-body");
const chatForm = document.querySelector(".chat-form");
const messageInput = document.querySelector(".message-input");

// Create user message
function createUserMessage(text) {

    const div = document.createElement("div");
    div.className = "message user-message";

    div.innerHTML = `
        <div class="message-text">${text}</div>
    `;

    return div;
}

// Send Message
chatForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const userMessage = messageInput.value.trim();

    if (!userMessage) return;

    chatBody.appendChild(createUserMessage(userMessage));

    chatBody.scrollTop = chatBody.scrollHeight;

    messageInput.value = "";

});