function findNaughtyStep(original, modified) {
    const length = Math.min(original.length, modified.length);

    for (let i = 0; i < length; i++) {
        if (original[i] !== modified[i]) {
            return original.length < modified.length ? modified[i] : original[i];
        }
    }

    // si el length es diferente, retorna el caracter extra en la cadena mas larga
    if (original.length < modified.length) {
        return modified.slice(length);
    } else if (original.length > modified.length) {
        return original.slice(length);
    }

    //si no hay diferenciar, retorna el string vacio
    return '';
}