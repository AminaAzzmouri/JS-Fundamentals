const arg = process.argv[2];
const num = parseInt(arg);

if (!isNaN(num)) {
	console.log("My Number: " + num);
	}
else {
	console.log("Not a number");
	}
