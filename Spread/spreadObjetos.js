function sumatoria(...numeros){
    return numeros.reduce((acc, n)=>acc + n, 0)
}

let acumulado = sumatoria(1,2,5,3, 600)
console.log(acumulado)