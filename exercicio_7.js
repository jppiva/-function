function filtrarPares(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(`sobreviveram no cisculo ${i}`)
            pares.push(arr[i])
        }
        else {
            console.log(`Não sobreviveu ao círculo sagrado: ${arr[i]}`);
        }
    }
    return pares;
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]))