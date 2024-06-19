const apiKey = "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";

async function groqChat(q, language) {
    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                "model": "llama3-8b-8192",
                "messages": [{ "role": "user", "content": `How to say "${q}" in ${language}?` }],
                "temperature": 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Response JSON:", jsonData);
        return jsonData.choices[0]?.message?.content || "Translation not available.";
    } catch (error) {
        console.error("Error:", error);
        return "Translation request failed. Please try again later.";
    }
}

async function translateText() {
    const target = document.getElementById('target').value;
    const qNode = document.getElementById('question');
    const responseNode = document.getElementById('response');
    responseNode.innerText = 'Translating... Please wait.';

    try {
        const answer = await groqChat(qNode.value, target);
        responseNode.innerText = answer;
    } catch (error) {
        console.error("Translation Error:", error);
        responseNode.innerText = "Translation failed. Please try again later.";
    }
}
