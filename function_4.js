function n(numero1, numero2, numero3, numero4) {
    const opcoes = [numero1, numero2, numero3, numero4];
    const level1 = opcoes[Math.floor(Math.random() * opcoes.length)];
    const level2 = opcoes[Math.floor(Math.random() * opcoes.length)];
    const pontuação1 = level1
    const pontuação2 = level2
    if (pontuação1 < pontuação2) {
        console.log(`Level 1 tem ${level1} e Level 2 tem ${level2}, portanto Level 2 é mais forte que Level 1.`)
    }
    else if (pontuação1 > pontuação2) {
        console.log(`Level 1 tem ${level1} e Level 2 tem ${level2}, portanto Level 1 é mais forte que Level 2.`)
    }
    else {
        console.log(`Level 1 tem ${level1} e Level 2 tem ${level2}, portanto os dois são iguais.`)
    }


    return [level1, level2]


}
function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

console.log(n(fatorial(0),fatorial (1),fatorial (5),fatorial (10)))