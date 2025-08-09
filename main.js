window.addEventListener("DOMContentLoaded", () => {
    loadLanguages();

    document.getElementById("convertBtn").addEventListener("click", () => {
        const uniqueCode = document.getElementById("codeInput").value.trim();
        const lang = document.getElementById("languageSelect").value;

        if (!uniqueCode) {
            alert("Por favor, pega tu código único.");
            return;
        }

        // 1. Decodificar el código único
        const scratchCode = decodeSpecialCode(uniqueCode);

        // 2. Limpiar el contenedor
        const outputDiv = document.getElementById("scratchOutput");
        outputDiv.innerHTML = "";

        // 3. Crear elemento para scratchblocks
        const pre = document.createElement("pre");
        pre.className = "blocks";
        pre.textContent = scratchCode;
        outputDiv.appendChild(pre);

        // 4. Renderizar como SVG
        scratchblocks.renderMatching("pre.blocks", {
            style: "scratch3",
            languages: [lang]
        });
    });
});
