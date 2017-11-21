var lives = 3;
var state = 13;

$(document).ready( function() {

	$('#header').css('display', 'none');
	$('#details').css('display', 'none');
	$('.startImg').css('display', 'none');
	var question_1 = "Where did the donkey go?";
	var answers_1 = [
		"there",
		"over there",
		"behind you",
		"what am I doing with my life?"
	]

		$('.game-window').append('<h2 class="q13" id="q_1">' + question_1 + '</h2>');
		$('.game-window').append('<button class="q13" type="button" id="a_1_0" onclick="clickIncorrect()">' + answers_1[0] + '</button>');
		$('.game-window').append('<button class="q13" type="button" id="a_1_1" onclick="clickIncorrect()">' + answers_1[1] + '</button>');
		$('.game-window').append('<button class="q13" type="button" id="a_1_2" onclick="clickCorrect()">' + answers_1[2] + '</button>');
		$('.game-window').append('<button class="q13" type="button" id="a_1_3" onclick="clickIncorrect()">' + answers_1[3] + '</button>');
		$('.game-window').append('<img class="q13" src="img/donkey.png" />');
		$('.game-window').append('<img class="q13" src="img/donkey2.png" />');

});

function clickCorrect() {
	console.log("correct!");
	if (state === 13){
		$('.q13').remove();
		var question_2 = "Confirm yourself!"

		var answers_2 = [
			"are you sure?",
			"look behind you",
			"but really?",
			"can you not"
		]
		$('.game-window').append('<h2 class="q14" id="q_1">' + question_2 + '</h2>');
		$('.game-window').append('<button class="q14" type="button" id="a_2_0" onclick="clickIncorrect()">' + answers_2[0] + '</button>');
		$('.game-window').append('<button class="q14" type="button" id="a_2_1" onclick="clickIncorrect()">' + answers_2[1] + '</button>');
		$('.game-window').append('<button class="q14" type="button" id="a_2_2" onclick="clickIncorrect()">' + answers_2[2] + '</button>');
		$('.game-window').append('<button class="q14" type="button" id="a_2_3" onclick="clickCorrect()">' + answers_2[3] + '</button>');
		state = 14;
		return;
	}
	if (state === 14){
		//search for the right picture
		state = 15;
		search();
		return;
	}
	if (state === 15){
		colorMe();
		return;
		//maze question, with two buttons (start, end)
		//mouse cant touch color. 
	}
	if (state === 16){
		//colorme question, where each color is clicked in a sequence.
	}
	//render next question 
}

function clickIncorrect() {
	console.log('incorrect');
	alert('wrong');
	loseLives();
	//lost life animation
}

function loseLives() {
	--lives;
	if (lives < 1){
		//render game over screen
	}
}

function addLife() {
	++lives;
	
}

function search() {
	//look for instructions
	//1. find the elephant
	//2. what's next?
	//3. 
	$('.q14').remove();
	// var question = "Where am I?"
	$('.game-window').append('<h2 id="q14"> Where am I? </h2>');
	$('.game-window').append('<div class="img" id="q14-1" onclick="clickIncorrect()"> <img src="img/q14-1.png" /> </div>');
	$('.game-window').append('<div class="img" id="q14-2" onclick="clickIncorrect()"> <img src="img/q14-2.png"  /> </div>');
	$('.game-window').append('<div class="img" id="q14-3" onclick="clickCorrect()"> <img src="img/q14-3.png"  /> </div>');
	$('.game-window').append('<div class="img" id="q14-4" onclick="clickIncorrect()"> <img src="img/q14-4.png"  /> </div>');
	$('.game-window').append('<div class="img" id="q14-5" onclick="clickIncorrect()"> <img src="img/q14-5.png"  /> </div>');
	$('.img').css('display','inline-table');
}

var step = 0;
function colorMe() {
	$('.img').remove();
	$('#q14').remove();
	$('.game-window').append('<h1 class="q16"> Color Boggy! </h1> <br>');
	$('.game-window').append('<h2 class="q16" id="q16-1" > B </h2>');
	$('.game-window').append('<h2 class="q16" id="q16-2" > O </h2>');
	$('.game-window').append('<h2 class="q16" id="q16-3" > G </h2>');
	$('.game-window').append('<h2 class="q16" id="q16-4" > G </h2>');
	$('.game-window').append('<h2 class="q16" id="q16-5" > Y </h2> <br>');
	$('.game-window').append('<div class="boxed" id="q16-11" onclick="colorMeBlue()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-17" onclick="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-12" onclick="colorMeOrange()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-13" onclick="colorMeGreen()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-18" onclick="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-15" onclick="colorMeYellow()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-16" onclick="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="boxed" id="q16-19" onclick="clickIncorrect()"><a/></div><br>');	
	$('.q16').css('display', 'inline-table');
	$('.boxed').css('display','inline-table');
	$('.boxed').css('height','50px');
	$('.boxed').css('width','50px');
	$('#q16-11').css('background-color', 'blue');
	$('#q16-12').css('background-color', 'orange');
	$('#q16-13').css('background-color', 'green');
	$('#q16-15').css('background-color', 'yellow');
	$('#q16-16').css('background-color', 'purple');
	$('#q16-17').css('background-color', 'white');
	$('#q16-18').css('background-color', 'black');
	$('#q16-19').css('background-color', 'red');

}

function colorMeBlue() {
	if (step === 0){
		$('#q16-1').css('color', 'blue');
		++step;
		return;
	}
	else{
		clickIncorrect();
	}
}
function colorMeOrange() {
	if (step === 1){
		$('#q16-2').css('color', 'orange');
		++step;
		return;
	}
	else{
		clickIncorrect();
	}

}
function colorMeGreen() {
	if (step === 2){
		$('#q16-3').css('color', 'green');
		++step;
		return;
	}
	else if (step === 3){
		$('#q16-4').css('color', 'green');
		++step;
		return;
	}
	else{
		clickIncorrect();
	}

}

function colorMeYellow() {
	if (step === 4){
		$('#q16-5').css('color', 'yellow');
		$('.game-window').append('<button onclick="clickCorrect()"> next! </button>');

	}
	else{
		clickIncorrect();
	}

}