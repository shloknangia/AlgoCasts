// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

	let revStr = '';
	let l = str.length;
	for(let i=0;i<l;i++){
		revStr += str[l - i - 1];
	}
	return revStr;
}

module.exports = reverse;
