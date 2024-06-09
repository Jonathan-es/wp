document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const hashOutput = document.getElementById('hashOutput');

    inputText.addEventListener('input', async () => {
        const hash = await generateSHA256Hash(inputText.value);
        hashOutput.textContent = hash;
    });

    async function generateSHA256Hash(text) {
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
        return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
});