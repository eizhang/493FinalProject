var lives = 3;

$(document).ready( function() {

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