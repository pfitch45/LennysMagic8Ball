var phraseList = [
	"String 1",
	"String 2",
	"String 3",
	"String 4",
	"String 5"
];

function eightBall (arr){
	var beg = 0;
	var end = arr.length;
	return arr[Math.floor(Math.random()*(end-beg)+beg)];
};