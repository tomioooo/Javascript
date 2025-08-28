function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}
//se substituirmos a variavel por um numero diretao vai dar o valor q ta la
//ex: 3 + 5 da 8 ai meu deus matematica 😮😮😮😮

function dividir(a, b) {
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
}

function idade(a, b) {
    return a - b;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    idade
};