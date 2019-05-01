// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2) {
 return result = n1 + n2
} 

console.log(soma(1,2))
console.log(soma(3,4))

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado1 = soma(1,2);
var resultado2 = soma(3,4);

console.log(`Primeira soma ${resultado1}`);
console.log(`Segunda soma ${resultado2}`);

// Qual o valor atualizado dessa variável?
console.log(`Tipo ${typeof(resultado1)} | valor ${resultado1}`);
console.log(`Tipo ${typeof(resultado2)} | valor ${resultado2}`);

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribui_valor(valor){
 myvar = valor;
 return console.log(`O valor da váriavel agora é ${myvar}`)
}

// Invoque a função criada acima.
atribui_valor(10);
atribui_valor(50);

// Qual o retorno da função? (Use comentários de bloco).
// O valor da váriavel agora é 10
// O valor da váriavel agora é 50

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(a1, a2, a3) {
 if (a1 == undefined ||a2 == undefined || a3 == undefined ) {
 	return 'Preencha todos os valores corretamentes';
 }
 return result = (a1 * a2 * a3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicacao(1,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamentes

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicacao(1,2, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function arguments(a1, a2, a3) {
  return (a1 == undefined && a2 == undefined && a3 == undefined ) ? false : undefined
	return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(arguments(undefined));