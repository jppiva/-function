function ehPalindromo(palavra) {
    const limpa = palavra.toLowerCase().replace(/\s+/g, '');
    const invertida = limpa.split('').reverse().join('');
    const resultado = limpa === invertida;  
    return [palavra,limpa];
}
console.log(ehPalindromo("Arara"));
console.log(ehPalindromo("A sacada da casa"));
console.log(ehPalindromo("Olá mundo"));