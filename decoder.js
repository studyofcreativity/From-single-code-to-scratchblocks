function decodeCode(code) {
  // Aquí va el mismo código de decoder.js que ya usas.
  // Ejemplo simple (debes ajustar con tu lógica real):
  const dictionary = {
    '◆': 'move 10 steps',
    '■': 'turn cw 15 degrees',
    '▲': 'say Hello! for 2 seconds',
    '●': 'repeat 10'
  };
  
  return code.split('\n').map(line => dictionary[line.trim()] || '').join('\n');
}
