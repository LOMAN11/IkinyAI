function sendMessage() {
    const input = document.getElementById("question");
    const chatBox = document.getElementById("chat-box");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // Ubutumwa bwawe
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";

    userMessage.innerHTML = `
        <strong>Wowe:</strong>
        <p>${question}</p>
    `;

    chatBox.appendChild(userMessage);

    // Igisubizo cya Loman
    const lomanMessage = document.createElement("div");
    lomanMessage.className = "message loman-message";

    lomanMessage.innerHTML = `
        <strong>Loman:</strong>
        <p>Nabonye ikibazo cyawe. 🤖 AI nyayo turayongeramo vuba!</p>
    `;

    chatBox.appendChild(lomanMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
