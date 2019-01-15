// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse_1(str) { //1

	let revStr = '';
	let l = str.length;
	for(let i=0;i<l;i++){
		revStr += str[l - i - 1];
	}
	return revStr;
}

function reverse_2(str) { //2

	// const arr = str.split('');
	// arr.reverse();
	// return arr.join('');
	return str.split('').reverse().join('');
}


function reverse_3(str) { //3

	let rev = '';
	for (let c of str){
		rev = c + rev;
	}
	return rev;
}


function reverse(str) { //4
	// debugger;
	return str.split('').reduce((reversed, character) => character + reversed , '')
}
// reverse('asdf');

module.exports = reverse;
