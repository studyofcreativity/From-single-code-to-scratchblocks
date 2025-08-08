// main.js
document.getElementById("convertButton").addEventListener("click", () => {
  const uniqueCode = document.getElementById("inputCode").value.trim();
  const lang = document.getElementById("lang").value;

  if (!uniqueCode) {
    alert("Por favor, pega tu código único.");
    return;
  }

  // 1. Decodificar código único a código Scratch normal
  const scratchCode = decodeUniqueCode(uniqueCode);

  // 2. Convertir a bloques Scratchblocks
  const rendered = translateToScratchblocks(scratchCode, lang);

  // 3. Mostrar en pantalla
  const output = document.getElementById("outputBlocks");
  output.innerHTML = "";
  output.appendChild(rendered);
});
