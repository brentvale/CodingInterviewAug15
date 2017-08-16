//time complexity => O(n)
//space complexity => O(n)
function reverseWord(string){
	let arrayedString = string.split("");
	//removed spaces from original arrayed string to reverse the ordering
	let arrayedStringNoSpaces = [];
	//keep track of indeces of " " in the origial arrayed string
	let stringIndeces = [];
	//create the final reversed array by reversing the original array with spaces removed 
	//and adding the spaces at correct indeces
	let reversedArrayWithSpaces = [];
		
	//time complexity O(n)
	//additional space used n
	for(let i = 0; i < arrayedString.length; i++){
		if(arrayedString[i] === " "){
			stringIndeces.push(i);
		} else {
			arrayedStringNoSpaces.push(arrayedString[i]);
		}
	}
	
	arrayedStringNoSpaces.reverse();
	
	//time complexity O(n)
	//additional space used n
	for(let i = 0; i < arrayedString.length; i ++){
		if(i === stringIndeces[0]){
			stringIndeces.shift();
			reversedArrayWithSpaces.push(" ");
		}
		reversedArrayWithSpaces.push(arrayedStringNoSpaces[i]);
	}
	
	//.join will use additional O(n) time
	//final string is additional n space
	return reversedArrayWithSpaces.join("");
}

let string = "cb a"
console.log(reverseWord(string)) // expect => ab c