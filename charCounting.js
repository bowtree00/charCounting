// list unique characters in a string
// report back number of instances of each letter

var myString = process.argv.slice(2);
console.log(myString);

var noSpaces = myString.join("");
console.log(noSpaces);


function countLetters(str) {
	var myObject = {};

	for (i = 0; i < str.length; i++) {
		if (!myObject[str[i]]) {
			myObject[str[i]] = 1;
		} else {
			//console.log("i: ", i);
			myObject[str[i]]++;
		}
	}
return myObject;
}

console.log(countLetters(noSpaces))
console.log(Object.keys(countLetters(noSpaces)))