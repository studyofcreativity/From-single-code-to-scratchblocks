// translator.js
// Traduce el código de Scratch a Scratchblocks en el idioma elegido

// Lista completa de idiomas soportados oficialmente por scratchblocks
const scratchLangs = [
  "en", "en-GB", "en-US",
  "fr", "pt", "pt-br", "de", "it", "ja", "ko",
  "zh", "zh-cn", "zh-tw", "ru", "pl", "nl",
  "es", "es-419", "he", "ar", "tr", "id", "ms", "th", "vi"
];

// Crea el selector de idioma dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang");
  scratchLangs.forEach(code => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = code;
    if (code === "es") opt.selected = true;
    langSelect.appendChild(opt);
  });
});

function translateToScratchblocks(code, lang) {
  return scratchblocks.render(code, {
    style: "scratch3",
    languages: [lang]
  });
}
