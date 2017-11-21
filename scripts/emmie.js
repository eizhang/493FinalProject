var lives = 3;
var state = 13;

// $(document).ready(function() {
//   $('#startbtn').click(function(){
//     $('#details').hide();
//     $('.startIMG').empty();
//     level13();
//   })

// });
function level13(){

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

}

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
		++state;
		colorMe();
		return;
		//maze question, with two buttons (start, end)
		//mouse cant touch color. 
	}
	if (state === 16){
		startMaze();
		//colorme question, where each color is clicked in a sequence.
	}
	//render next question 
}

function clickIncorrect() {
	console.log('incorrect');
	// alert('wrong');
	loseLives();
	//lost life animation
}

function loseLives() {
	--lives;
	console.log('here');
	$('.startImg').prepend($('<img>',{id:'theImg',src:'img/loss_life.png'}));
	$('#theImg').css('height','200');
	$('#theImg').css('width','400');
	$('#theImg').css('position','absolute');
	setTimeout(function(){
		$('#theImg').remove();
			var name = 'img/'+lives+'_lives.png'
	console.log(name);
	$('#num_lives').attr('src',name);

	},1000);

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
		$('.game-window').append('<button class="q16" onclick="clickCorrect()"> next! </button>');

	}
	else{
		clickIncorrect();
	}

}

function startMaze() {
	$('.q16').remove();
	$('.boxed').remove();
	$('.game-window').append('<div class="m" id="startMaze" onclick="maze()">Click!</div>');
	$('#startMaze').css({
		'position' : 'absolute',
		'bottom' : '42%',
		'left' : '0px'
	});
}

function maze() {
	
	$('.game-window').append('<div class="maze" id="maze_1" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_2" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_3" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_4" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_5" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_6" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_7" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="m" id="endMaze" onclick="end()">Click me now!</div>');
	$('.game-window').append('<div class="maze" id="maze_8" onmouseover="clickIncorrect()"><a/></div>');
	$('.game-window').append('<div class="maze" id="maze_9" onmouseover="clickIncorrect()"><a/></div>');
	$('#endMaze').css({
		'position' : 'absolute',
		'top' : '8%',
		'right' : '6%'
	});
	$('#maze_1').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '40px',
		'width' : '50%',
		'top' : '0px'
	})
	$('#maze_2').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '40%',
		'width' : '60%',
		'bottom' : '0px',
		'left' : '0px'
	})
	$('#maze_3').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '20%',
		'width' : '40%',
		'bottom' : '0px',
		'right' : '0px'
	})
	$('#maze_4').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '50%',
		'width' : '30%',
		'bottom' : '50%',
		'right' : '20%'
	})
	$('#maze_5').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '60%',
		'width' : '40%',
		'bottom' : '60px',
		'left' : '50px'
	})
	$('#maze_6').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '80%',
		'width' : '15%',
		'bottom' : '0px',
		'right' : '0px'
	})
	$('#maze_7').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '70%',
		'width' : '10%',
		'top' : '0px',
		'right' : '20%'
	})
	$('#maze_8').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '5%',
		'width' : '20%',
		'top' : '0px',
		'right':'0px'
	})
	$('#maze_9').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '100%',
		'width' : '5%',
		'top' : '0px',
		'right':'0px'
	})


}

function end() {
	$('.game-window').empty();
	$('.game-window').append('<h1> You Win!!!!</h2>')
}