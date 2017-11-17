var lives = 3;

$(document).ready( function() {
	//question
	var body = document.getElementById('main-screen');
	var question_1 = "Where did the donkey go?";
	var answers_1 = [
		"there",
		"over there",
		"behind you",
		"what am I doing with my life?"
	]

	var question_2 = "Confirm yourself!"

	var answers_2 = [
		"are you sure?",
		"look behind you",
		"but really?",
		"can you not"
	]

	body.append('<h2 id="q_1">' + question_1 + '</h2>');
		body.append('<button type="button" id="a_1_0" onclick="clickIncorrect">' + answers_1[0] + '</button>');
		body.append('<button type="button" id="a_1_1" onclick="clickIncorrect">' + answers_1[1] + '</button>');
		body.append('<button type="button" id="a_1_2" onclick="clickCorrect">' + answers_1[2] + '</button>');
		body.append('<button type="button" id="a_1_3" onclick="clickIncorrect">' + answers_1[3] + '</button>');


});

function clickCorrect() {
	console.log("correct!");
	//render next question 
}

function clickIncorrect() {
	console.log('incorrect');
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