for (let i = 1; i <= 20; i++) {
    if (i%2==0){
        console.log('O numero ${i} é par');
    } else{
        console.log('O numero ${i} é impar');
    }
}

console.log("Teste de igualdade estrita ( '10' === 10):");
if("10" === 10){
    console.log("A string '10' é estritamente igual ao número 10");
} else{
    console.log("A string '10' não é estritamente igual ao número 10");
}