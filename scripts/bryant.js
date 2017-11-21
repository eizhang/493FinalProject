function level1() {
	$('#header').text("What is 1 + 1");
	$('#details').hide();
	$('.startIMG').empty();
	var answers = ['2','two','too','window']
	console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL1-'" + i + "' class='answer_button'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startIMG').append(buttonsDiv);
     };

     $('.answer_button').hover(function() {
        //mouse over
        $(this).css('background', '#ff0')
    }, function() {
        //mouse out
        $(this).css('background', 'white')
    });

     $('.answer_button').click(function(){

     	if($(this).text() == 'H'){
     		console.log("correct");
     		alert("correct");
     	}
     	else{
     		console.log("incorrect");
     		alert('wrong!');
     	}
     });
}

function level2() {
	$('#header').text("DON'T PRESS ME");
	$('#details').hide();
	$('.startIMG').empty();
	var bigButton = "<input type='image' id='bigButton' src='img/arcade_green_half.png' width='200' height='120'/>"
	$('.startIMG').append(); 
	var buttonTimeout = setTimeout(function(){
		alert("NICE");
	}, 5000);
	$('#bigButton').click() {
		window.clearTimeout(buttonTimeout);
		alert("DEAD");
	}
}

function level3() {
	
}

function level4() {
	
}

function level5() {
	
}

function start_game() {

}

$(document).ready(function() {


});