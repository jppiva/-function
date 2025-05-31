function parOuImpar(numero){
    if(numero % 2 == 0){
        return('par')
    }
    else{
        return('impar')
    }
}
console.log(parOuImpar(4))
console.log(parOuImpar(17))
console.log(parOuImpar(0))
console.log(parOuImpar(-8))