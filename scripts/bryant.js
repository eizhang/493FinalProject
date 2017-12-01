function level1() {
	$('.game-window').empty();
	$('.game-window').append("<h1 id='header'>What is 1 + 1</h1>");
	$('.game-window').append("<div class='startImg'></div")

	var answers = ['2','two','too','window']
	console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL1-'" + i + "' class='answer_button'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startImg').append(buttonsDiv);
     };

     $('.answer_button').hover(function() {
        //mouse over
        $(this).css('background', '#ff0')
    }, function() {
        //mouse out
        $(this).css('background', 'white')
    });

     $('.answer_button').click(function(){

     	if($(this).text() == 'window'){
     		$('.startIMG').empty();
	        $('.answer_button').empty();
	        level2();
	        //Correct();
     	}
     	else{
     		loseLives();
     	}
     });
}

function level2() {
	$('#header').text("PRESS ME");
	$('#details').hide();
	$('.startIMG').empty();
	var bigButton = "<input type='image' id='bigButton' src='img/arcade_green_half.png' width='360px' height='400px'/>"
	$('.startIMG').append(bigButton); 
	var buttonTimeout = setTimeout(function(){
		$('#header').text("GOOD PATIENCE");
		//Correct();
		level3(); 
	}, 3000);
	$('#bigButton').click(function() {
		window.clearTimeout(buttonTimeout);
		loseLives();
		alert("DEAD");
	});
}

function level3() {
	$('#header').text("Who am I?");
	$('#details').hide();
	$('.startIMG').empty();
	var hangman = "<input type='image' id='mark' src='img/mark.png' width='200px' height='200px'/>"
	$('.startIMG').append(hangman); 
	var answers = ['a','l', 'd', 'g','n','e', 'm', 'r', 'k']
	var mark_count = 0; 
	console.log(answers.length);
	for (var i = 0; i < answers.length; i++) {
		console.log(i);
		var buttonsDiv = "<button id='answerL3-" + i + "' class='answer_button'>"+ answers[i] +"</button>";
		console.log(buttonsDiv);
		console.log(answers[i]);
		$('.startImg').append(buttonsDiv);
	};

	$('.answer_button').click(function(){
		console.log($(this).attr('id'));
		if($(this).attr('id') == 'answerL3-0'){
			console.log('incorrect');
		loseLives();
			mark_count = 0;
			var name = 'img/mark_'+mark_count+'.png';
		$('#mark').attr('src',name);
		}
		else if($(this).attr('id') == 'answerL3-1' && mark_count== 0 ){
			mark_count++;
			var name = 'img/mark_'+mark_count+'.png';
			$('#mark').attr('src',name);
		}
		else if($(this).attr('id') == 'answerL3-5' && (mark_count==1 || mark_count == 3)){
			mark_count++;
			var name = 'img/mark_'+mark_count+'.png';
			$('#mark').attr('src',name);
		}
		else if($(this).attr('id') == 'answerL3-3' && mark_count==2 ){
			mark_count++;
			var name = 'img/mark_'+mark_count+'.png';
			$('#mark').attr('src',name);
		}
		else if($(this).attr('id') == 'answerL3-4' && mark_count==4 ){
			mark_count++;
			var name = 'img/mark_'+mark_count+'.png';
			$('#mark').attr('src',name);
		}
		else if($(this).attr('id') == 'answerL3-2' && mark_count ==5){
			mark_count++;
			var name = 'img/mark_'+mark_count+'.png';
			$('#mark').attr('src',name);
			if(mark_count == 6){
				setTimeout(function(){
	 			console.log("YAY");
	       		$('.startIMG').empty();
		        $('.answer_button').empty();
		        Correct();
		        $('#game-window').html("");
		        $('#mark').remove();
	    	},1000);
			}
		}
		else{
			
			console.log("wrong!");
			loseLives();
			mark_count = 0;
			var name = 'img/mark_'+ mark_count+'.png';
			$('#mark').attr('src',name);
		}

	})
	
}

