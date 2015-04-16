//business logic 
var phraseList = [
	"It is certain.",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
];

function eightBall (arr){
	var beg = 0;
	var end = arr.length;
	var result = arr[Math.floor(Math.random()*(end-beg)+beg)];
	console.log(result);
	
	//document.getElementById("output").innerHTML = result;
	$('#output').html(result); 
};

//end business logic 

//site functionality

$(document).ready(function (){
	$('#button').click(function(){
		eightBall(phraseList);
	});
});


