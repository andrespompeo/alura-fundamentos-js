//parametros de função

              //2   //2
function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(2, 4));
console.log(soma(245, 22));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Andre", 30))

function multiplica (num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));