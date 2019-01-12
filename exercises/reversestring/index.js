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

function reverse(str) { //2

	// const arr = str.split('');
	// arr.reverse();
	// return arr.join('');
	return str.split('').reverse().join('');
}


function reverse(str) { //3

	let rev = '';
	for (let c of str){
		rev = c + rev;
	}
	return rev;
}

module.exports = reverse;
