console.log('loaded.js!');

var words = ['a','be', 'boss', 'words', 'crazy', 'psychotic']
var answer1 = findLongestword(words);

var myResultsTag = document.querySelector('#results');
myResultsTag.innerHTML = answer1; 

function findLongestword(incoming_array) {
var biggest_length_so_far = 0;
console.log('biggest length start at: ' + biggest_length_so_far);

for (var counter = 0; counter < incoming_array.length; counter++) {
console.log('biggest_length_so_far: ' + biggest_length_so_far);

var word = incoming_array[counter];
console.log('new word length: ' + word.length);

if (word.length > biggest_length_so_far){
console.log('if-statement triggered!')
biggest_length_so_far = word.length;
}

console.log('new value of biggest_length_so_far: ' + biggest_length_so_far);
}
}



// console.log(myResultsTag);
// console.log(myResultsTag.innerHTML);



// document.getElementById('results');

// document.querySelector('#results');

// console.log('global scope');

// var answer = wordreverse('Now I know what a TV dinner feels like');
// console.log(answer);

// function wordreverse(string) {
// var array = string.split(' ');
// var reversedarray = array.reverse(); 
// var joinedarray = reversedarray.join(' ');
// var output = joinedarray;

// console.log(output);



// console.log('test');
// }




// var answer = transmogrifier(3,4,5);
// console.log(answer);

// function transmogrifier(number1, number2, number3) {

// 	var answer = Math.pow((number1 * number2),number3)

// }


// var words = ["hello", "what", "is", "up", "dude"]
// var output = lengths(words);
// console.log(output);

// function lengths(words){
// 	var numbers_array = [];

// 	for (var counter = 0; counter < words.length; counter++){
// 	var word = words[counter];
// 	console.log(word.length);
// 	numbers_array.push(words.length)

// 	}

// 	console.log(counter);
// 	return numbers_array;
// }




