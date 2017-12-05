var state = 13;
var lives = 3;
function level13(){
	state = 13;
	  $('#q-number').attr('src','img/level9.png');
	$('#word_lives').css('visibility', 'visible');
	$('#num_lives').css('visibility', 'visible');
	$('#details').css('display', 'none');
	$('.startIMG').empty();
	var question_1 = "Where is the donkey?";
	var answers_1 = [
		"203 Welford Rd, Leicester LE2 6BH, UK",
		"there",
		"behind you",
		"what?"
	]

	$('#header').text(question_1);
	for (var i = 0; i < 4; i++) {
	    var buttonsDiv = "<button class='answer_button L9 answer_button"+i+"' style='font-size: 20pt'>"+answers_1[i]+"</button>";
	    $('.startIMG').append(buttonsDiv);
	 };
	$('.startIMG').append('<img class="q13" src="img/donkey.png" style=" height: 20%; width: auto; top: 35%; position: absolute; left: 40%;" />');
	$('.startIMG').append('<img class="q13" src="img/donkey2.png" style=" height: 20%;width: auto;top: 15%;position: absolute; right: 10%;"/>');

	$('.answer_button').hover(function() {
        //mouse over
        if($(this).text() == answers_1[0]){
        $(this).css('background', "url('./img/Hover-1.png')");
      }
        else if($(this).text() == answers_1[1]){
          $(this).css('background', "url('./img/Hover-2.png')");
        }
        else if($(this).text() == answers_1[2]){
            $(this).css('background', "url('./img/Hover-3.png')");
        }
        else{
            $(this).css('background', "url('./img/Hover-4.png')");
        }
    }, function() {
        //mouse out
        if($(this).text() == answers_1[0]){
        $(this).css('background', "url('./img/Button-1.png')");
      }
      else if($(this).text() == answers_1[1]){
        $(this).css('background', "url('./img/Button-2.png')");
      }
      else if($(this).text() == answers_1[2]){
        $(this).css('background', "url('./img/Button-3.png')");
      }
      else{
        $(this).css('background', "url('./img/Button-4.png')");
      }
    });

    $('.answer_button').click(function(){

     	if($(this).text() == 'behind you'){
	     		console.log("correct");
	        $('.startIMG').empty();
	        clickCorrect();
     	}
     	else{
     		loseLives();
     	}
     });

}
function subLevel() {
	var question_2 = "Confirm yourself!"
	  $('#q-number').attr('src','img/level10.png');

	var answers_2 = [
		"are you sure?",
		"look behind ",
		"but really?",
		"can you not"
	]	
	$('#header').text(question_2);
	for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button class='answer_button L9 answer_button"+i + " style='font-size: 35px;' >"+answers_2[i]+"</button>";
        $('.startIMG').append(buttonsDiv);
    };
    $('.answer_button').hover(function() {
        //mouse over
        if($(this).text() == answers_2[0]){
        $(this).css('background', "url('./img/Hover-1.png')");
      }
        else if($(this).text() == answers_2[1]){
          $(this).css('background', "url('./img/Hover-2.png')");
        }
        else if($(this).text() == answers_2[2]){
            $(this).css('background', "url('./img/Hover-3.png')");
        }
        else{
            $(this).css('background', "url('./img/Hover-4.png')");
        }
    }, function() {
        //mouse out
        if($(this).text() == answers_2[0]){
        $(this).css('background', "url('./img/Button-1.png')");
      }
      else if($(this).text() == answers_2[1]){
        $(this).css('background', "url('./img/Button-2.png')");
      }
      else if($(this).text() == answers_2[2]){
        $(this).css('background', "url('./img/Button-3.png')");
      }
      else{
        $(this).css('background', "url('./img/Button-4.png')");
      }
    });

    $('.answer_button').click(function(){

     	if($(this).text() == 'can you not'){
     		console.log("correct");
	        $('.startIMG').empty();
	        $('.answer_button').empty();
	        clickCorrect();
     	}
     	else{
     		loseLives();
     	}
     });
}

function clickCorrect() {
	console.log("correct!");
	if (state === 13){
		state = 14;

		subLevel();
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
		++state;
		$('.q16').remove();
		$('.boxed').remove();
		startMaze();
	}
	//render next question 
}

function loseLives() {
	--lives;
	console.log('here');
	if (state === 16) {
		$('#header').empty();
		$('.startIMG').empty();
		colorMe();
	}
	if (state === 17) {
		$('.maze').remove();
		$('#startMaze').remove();
		$('#endMaze').remove();
		startMaze();
	}
	$('.startIMG').append($('<img>',{id:'theImg',src:'img/loss_life.png'}));
	$('#theImg').css('position','absolute');
	$('#theImg').css('height','400');
	$('#theImg').css('width','400');
	$('#theImg').css('bottom','8%');
	$('#theImg').css('left','30%');
	
   
    setTimeout(function(){
		var name = 'img/'+lives+'_lives.png'
		$('#num_lives').attr('src',name);
	},500);
   

	setTimeout(function(){
		$('#theImg').remove();
	},1000);

	if (lives < 1){
		//render game over screen
		lost();
	}

}

function addLife() {
	++lives;
	
}

function search() {
	//look for instructions
	$('.q14').remove();
	  $('#q-number').attr('src','img/level11.png');
	$('#header').text('I like acorns...?');
	$('.startIMG').append('<div class="img" id="q14-4" onclick="loseLives()"> <img src="img/q14-4.png" style="position:absolute; height:100px; width:auto; top:15%; left:15%" /> </div>');
	$('.startIMG').append('<div class="img" id="q14-1" onclick="loseLives()"> <img src="img/q14-1.png"  style="position:absolute; height:100px; width:auto; top:10%; right:10%"/> </div>');
	$('.startIMG').append('<div class="img" id="q14-3" onclick="loseLives()"> <img src="img/q14-3.png"  style="position:absolute; height:100px; width:auto; top:60%; right:2%"/> </div>');
	$('.startIMG').append('<div class="img" id="q14-5" onclick="clickCorrect()"> <img src="img/q14-5.png"  style=" position:absolute; height:100px; width:auto; left:22%; bottom:30%"/> </div>');
	$('.startIMG').append('<div class="img" id="q14-2" onclick="loseLives()"> <img src="img/q14-2.png"  style="position:absolute; height:100px; width:auto; bottom:10%; left:10%"/> </div>');
	$('.startIMG').append('<div class="img" id="q14-6" onclick="loseLives()"> <img src="img/q14-6.png"  style="position:absolute; height:100px; width:auto; bottom:50%; right:50%"/> </div>');
}

var step = 0;
function colorMe() {
	step = 0;
	$('.img').remove();
  	$('#q-number').attr('src','img/level12.png');
	$('#header').empty();
	$('#header').text('Can you color a row port?');
	$('#header').append('<br><h2 class="q16" id="q16-1" > R </h2>');
	$('#header').append('<h2 class="q16" id="q16-2" > O </h2>');
	$('#header').append('<h2 class="q16" id="q16-3" > W </h2>');
	$('#header').append('<h2 class="q16" id="q16-4" > P </h2>');
	$('#header').append('<h2 class="q16" id="q16-5" > O </h2>');
	$('#header').append('<h2 class="q16" id="q16-6" > R </h2>');
	$('#header').append('<h2 class="q16" id="q16-7" > T </h2> <br>');
	$('.startIMG').append('<div class="boxed" id="q16-11" onclick="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-17" onclick="colorMeWhite()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-12" onclick="colorMeOrange()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-13" onclick="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-18" onclick="colorMeTeal()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-15" onclick="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-16" onclick="colorMePurple()"><a/></div>');
	$('.startIMG').append('<div class="boxed" id="q16-19" onclick="colorMeRed()"><a/></div><br>');	
	$('.q16').css('display', 'inline-table');
	$('.boxed').css('display','inline-table');
	
	
	


}

function colorMeWhite() {
	if (step === 2){
		$('#q16-3').css('color', 'white');
		++step;
		return;
	}
	else{
		loseLives();
	}
}
function colorMeOrange() {
	if (step === 1){
		$('#q16-2').css('color', 'orange');
		++step;
		return;
	}
	else if (step === 4){
		$('#q16-5').css('color', 'orange');
		++step;
		return;
	}
	else{
		loseLives();
	}

}
function colorMePurple() {
	if (step === 3){
		$('#q16-4').css('color', 'purple');
		++step;
		return;
	}
	else{
		loseLives();
	}

}

function colorMeTeal() {
	if (step === 6){
		$('#q16-7').css('color', 'teal');
		setTimeout(function(){
	      clickCorrect();
		},1000);
	

	}
	else{
		loseLives();
	}

}

function colorMeRed() {
	if (step === 0){
		$('#q16-1').css('color', 'red');
		++step;
		return;
	}
	else if (step === 5){
		$('#q16-6').css('color', 'red');
		++step;
		return;
	}
	else{
		loseLives();
	}

}

function startMaze() {
	$('#header').empty();
	$('#header').append('<h3 id="startMsg">Click the pupper! </h3>')
	$('.startIMG').append('<img id="startMaze" src= "img/corgi.jpg" onclick="maze()"></img>');
	$('#startMaze').css({
		'position' : 'absolute',
		'bottom' : '42%',
		'left' : '0px'
	});
}

function maze() {
	$('#startMsg').remove();
	  $('#q-number').css('visibility','hidden');
	$('.startIMG').append('<div class="maze" id="maze_1" onmouseover="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="maze" id="maze_2" onmouseover="loseLives()">Do not touch the green!!!</div>');
	$('.startIMG').append('<div class="maze" id="maze_3" onmouseover="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="maze" id="maze_4" onmouseover="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="maze" id="maze_5" onmouseover="loseLives()"><h2>Show baby corgi how to get to momma corgi through the forest!</h2></div>');
	$('.startIMG').append('<div class="maze" id="maze_6" onmouseover="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="maze" id="maze_7" onmouseover="loseLives()"><a/></div>');
	$('.startIMG').append('<img id="endMaze" src="img/mom.jpg" onclick="CorrectMaze()"/>');
	$('.startIMG').append('<div class="maze" id="maze_8" onmouseover="loseLives()"><a/></div>');
	$('.startIMG').append('<div class="maze" id="maze_9" onmouseover="loseLives()"><a/></div>');
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
		'top' : '0px',
		'z-index':'-1'
	})
	$('#maze_2').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '40%',
		'width' : '60%',
		'bottom' : '0px',
		'left' : '0px',
		'z-index':'-1'
	})
	$('#maze_3').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '20%',
		'width' : '40%',
		'bottom' : '0px',
		'right' : '0px',
		'z-index':'-1'
	})
	$('#maze_4').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '50%',
		'width' : '30%',
		'bottom' : '50%',
		'right' : '20%',
		'z-index':'-1'
	})
	$('#maze_5').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '60%',
		'width' : '40%',
		'bottom' : '60px',
		'left' : '50px',
		'z-index':'-1'
	})
	$('#maze_6').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '80%',
		'width' : '15%',
		'bottom' : '0px',
		'right' : '0px',
		'z-index':'-1'
	})
	$('#maze_7').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '70%',
		'width' : '10%',
		'top' : '0px',
		'right' : '20%',
		'z-index':'-1'
	})
	$('#maze_8').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '5%',
		'width' : '20%',
		'top' : '0px',
		'right':'0px',
		'z-index':'-1'
	})
	$('#maze_9').css({
		'position' : 'absolute',
		'background-color' : '#77dd7e',
		'height' : '100%',
		'width' : '5%',
		'top' : '0px',
		'right':'0px',
		'z-index':'-1'
	})


}

function CorrectMaze(){
	// $('.maze').remove();
	// $('#startMaze').remove();
	// $('#endMaze').remove();
	$('.startIMG').empty();
	$('.startIMG').append("<img class='fam' src='img/fam.jpg' style='left:30%; top:15%; height:400px; width:auto;'> <h2 class='fam'> Thanks! I've missed momma! </h2></img>");
	setTimeout(function(){
		$('.fam').remove();
			Correct();
	},2000);

}

function lost(){
	$('.game-window').append("<img class='win-screen' src='img/Loss_Screen.png' style='position:absolute; left:0; top:0;'>");
	$('.game-window').append('<img class="win-screen" onclick="restart()" src="img/Try_again.png" style="position:absolute; left:35%; bottom: 25%;z-index:2; height:100px;">')
}

function end() {
	$('.game-window').append("<img class='win-screen' src='img/Win_Screen.png' style='position:absolute; left:-6; top:0;'>");
	$('.game-window').append('<img class="win-screen" onclick="restart()" src="img/Play_again.png" style="position:absolute; left:45%; bottom:0;z-index:2; height:100px;">')

}
function restart(){
	$('.win-screen').remove();
	$('#details').hide();
    $('.startIMG').empty();
    $('#word_lives').css('visibility','visible');
    $('#num_lives').css('visibility','visible');
    $('#num_lives').css('visibility','visible');
    state = 0;
	question1();
	//reset score?
}