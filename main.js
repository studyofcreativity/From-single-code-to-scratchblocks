document.getElementById('translateBtn').addEventListener('click', () => {
  const uniqueCode = document.getElementById('inputCode').value.trim();
  const lang = document.getElementById('language').value;

  const decoded = decodeCode(uniqueCode);
  const scratchblocksCode = translateToScratchblocks(decoded, lang);

  const output = document.getElementById('scratchblocksOutput');
  output.textContent = scratchblocksCode;

  scratchblocks.renderMatching(".scratchblocks", {
    style: "scratch3",
    languages: [lang]
  });
});
