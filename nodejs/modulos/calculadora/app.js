//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculadora_idade = require('./calculadora_idade');
import {somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

// Exemplo de uso:
const resultadoSoma = somar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoSubtracao = subtrair(10, 4);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = multiplicar(7, 7);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = dividir(20, 5);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

console.log(calculadora_idade.idade("Tomio", 2008));