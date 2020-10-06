// Question 1
var petArray = ["cat", "cow", "dog"];

// Question 2
console.log(petArray[1]);

// Question 3
petArray.push("sheep");

// Question 4
console.log(petArray.length);

// Question 5
var catObject = {
	name: "Tussi",
	colour: "White",
	age: 1,
};

// Question 6
console.log(catObject["age"]);

// Question 7
var catArray = [
	{
		name: "Tussi",
		colour: "White",
		age: 1,
	},
];

// Question 8
for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i]);
}

// Question 9
function logToConsole(animal) {
	console.log(animal);
}
logToConsole("cat");

// Question 10
logToConsole("donkey");
