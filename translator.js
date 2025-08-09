// Lista de idiomas de Scratchblocks
const scratchLanguages = {
    "English": "en",
    "Español (España)": "es",
    "Español (Latinoamérica)": "es-419",
    "Français": "fr",
    "Deutsch": "de",
    "Italiano": "it",
    "Português (Brasil)": "pt-br",
    "Русский": "ru",
    "日本語": "ja",
    "한국어": "ko",
    "中文 (简体)": "zh-cn",
    "中文 (繁體)": "zh-tw"
};

// Rellenar selector de idiomas
function loadLanguages() {
    const select = document.getElementById("languageSelect");
    for (const name in scratchLanguages) {
        const option = document.createElement("option");
        option.value = scratchLanguages[name];
        option.textContent = name;
        select.appendChild(option);
    }
}
