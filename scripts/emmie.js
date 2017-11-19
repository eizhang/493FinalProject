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
		search();
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
	$('.game-window').append('<img src="img/q14-1.png" id="q14-1" />');
}