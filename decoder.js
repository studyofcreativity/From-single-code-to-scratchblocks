// Diccionario ficticio para ejemplo (debes poner el tuyo real)
const specialMap = {
    "/saludo/": "say [Hola] for (2) seconds",
    "/loopforever/": "forever",
    "/setnum0/": "set [numero v] to (0)",
    "/changenum1/": "change [numero v] by (1)",
    "/ifelse/": "if <> then\nelse"
};

// Función para decodificar desde código único
function decodeSpecialCode(uniqueCode) {
    let result = uniqueCode;
    for (const key in specialMap) {
        const regex = new RegExp(key, "g");
        result = result.replace(regex, specialMap[key]);
    }
    return result;
}
