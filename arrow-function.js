function apresentar(nome){
    return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
console.log(apresentarArrow("Andre"));

// Arrow function com mais de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 < 10){
        return num1 + num2;
    } else {
        return "Somente números menores que 10";
    }
}
console.log(somaNumerosPequenos(10, 2));

