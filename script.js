```javascript
function sendMessage() {
    const question = document.getElementById("question").value;
    const response = document.getElementById("response");

    if (question.trim() === "") {
        response.innerText = "Andika ikibazo mbere yo kohereza.";
        return;
    }

    response.innerText =
        "Murakoze! Nabonye ikibazo cyawe: " + question;
}
```
