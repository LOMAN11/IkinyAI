

async function sendMessage() {
    const input = document.getElementById("question");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();

    if (!message) return;

    chatBox.innerHTML += `
        <p><strong>Wowe:</strong> ${escapeHTML(message)}</p>
    `;

    input.value = "";

    const loading = document.createElement("p");
    loading.textContent = "Loman iratekereza...";
    chatBox.appendChild(loading);

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        loading.remove();

        const reply = document.createElement("p");
        reply.textContent = "Loman: " + (
            response.ok
                ? data.reply
                : data.error || "Habaye ikibazo."
        );
        chatBox.appendChild(reply);

    } catch (error) {
        loading.remove();

        const reply = document.createElement("p");
        reply.textContent =
            "Loman: Habaye ikibazo cyo guhuza na AI. Ongera ugerageze.";
        chatBox.appendChild(reply);
    }
}

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}
