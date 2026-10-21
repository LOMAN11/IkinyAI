module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Ubu buryo ntibwemerewe."
        });
    }

    const message = req.body?.message;

    if (!message || typeof message !== "string") {
        return res.status(400).json({
            error: "Andika ikibazo cyawe."
        });
    }

    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({
            error: "AI ntirashyirwamo API key."
        });
    }

    try {
        const response = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                        `Bearer ${process.env.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4.1-mini",
                    instructions:
                        "Witwa Loman. Subiza ibibazo mu Kinyarwanda cyumvikana.",
                    input: message
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(502).json({
                error: "AI ntiyashoboye gusubiza. Ongera ugerageze."
            });
        }

        return res.status(200).json({
            reply: data.output_text
        });

    } catch (error) {
        return res.status(500).json({
            error: "Habaye ikibazo cyo kuvugana na AI."
        });
    }
};
