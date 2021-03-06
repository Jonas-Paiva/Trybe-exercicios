// =====================================Exercícios=======================================
// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo: O fatorial é representado pelo sinal !, 4! = 4 x 3 x 2 x 1 = 24;
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial(N) {
	let fatorial = N;
	for (let index = N; index > 0; index--) {
		fatorial = fatorial + index * (index - 1);
	}
	return console.log(fatorial);
}
fatorial(5);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let reveserWord = [];
for (const key in word) {
	reveserWord.unshift(word[key]);
}
console.log(reveserWord.join(''));

// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css', 'JP'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

function maiorPalavra(array) {
	let maior = 0;
	let palavra = '';
	for (const iterator of array) {
		if (iterator.length > maior) {
			maior = iterator.length;
			palavra = iterator;
		}
	}
	return console.log(
		` A maior palavra do array é ${palavra} com ${maior} caracteres.`
	);
}

function menorPalavra(array) {
	let menor = 9999999999;
	let palavra = '';
	for (const iterator of array) {
		if (iterator.length < menor) {
			menor = iterator.length;
			palavra = iterator;
		}
	}
	return console.log(
		` A menor palavra do array é ${palavra} com ${menor} caracteres.`
	);
}
maiorPalavra(array);
menorPalavra(array);


