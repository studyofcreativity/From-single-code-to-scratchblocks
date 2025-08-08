// decoder.js
// Convierte el "código único" a código normal de Scratch

function decodeUniqueCode(uniqueCode) {
  // Diccionario de ejemplo (tendrás que poner el real de tu proyecto anterior)
  const specialMap = {
    "/noise(no existe)": "move 10 steps",
    "/loop(espiral sin fin)": "repeat 10",
    // ... agrega todas tus reglas
  };

  let decoded = uniqueCode;
  for (const [symbol, replacement] of Object.entries(specialMap)) {
    decoded = decoded.split(symbol).join(replacement);
  }
  return decoded;
}
