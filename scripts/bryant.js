function level1() {
	$('#header').append("What is 1 + 1");
	$('#q-number').css('visibility','visible');
	$('#q-number').attr('src','img/level14.png');
	//$('.game-window').append("<div class='startImg'></div")

	var answers = ['2','two','too','window']
	console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL1-'" + i + "' class='answer_button L1 answer_button"+i+"'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startImg').append(buttonsDiv);
     };

   $('.answer_button').hover(function() {
        //mouse over
        if($(this).text() == answers[0]){
        $(this).css('background', "url('./img/Hover-1.png')");
      }
        else if($(this).text() == answers[1]){
          $(this).css('background', "url('./img/Hover-2.png')");
        }
        else if($(this).text() == answers[2]){
            $(this).css('background', "url('./img/Hover-3.png')");
        }
        else{
            $(this).css('background', "url('./img/Hover-4.png')");
        }
    }, function() {
        //mouse out
        if($(this).text() == answers[0]){
        $(this).css('background', "url('./img/Button-1.png')");
      }
      else if($(this).text() == answers[1]){
        $(this).css('background', "url('./img/Button-2.png')");
      }
      else if($(this).text() == answers[2]){
        $(this).css('background', "url('./img/Button-3.png')");
      }
      else{
        $(this).css('background', "url('./img/Button-4.png')");
      }
    });

     $('.answer_button').click(function(){

     	if($(this).text() == 'window'){
     		$('.startIMG').empty();
	        $('.answer_button').empty();
	        Correct();
     	}
     	else{
     		loseLives();
     	}
     });
}

function level2() {
	$('#header').text("PRESS ME");
	$('#q-number').attr('src','img/level15.png');
	$('#details').hide();
	$('.game-window').append('<div class="bigbtn"></div>');
	$('.bigbtn').empty();
	var bigButton = "<input type='image' id='bigButton' src='img/arcade_green_half.png' width='360px' height='400px'/>"
	$('.bigbtn').append(bigButton); 
	$('.game-window').append('<p id="p4" style="visibility:hidden;color: red;position: absolute;top: 10px;right: 10px;font-size: 30px;font-family: chalkduster; ">YOU KNOW YOU WANT TO</p>')
	$('.game-window').append('<p id="p3" style="visibility:hidden;visibility: hidden;color: red;position: absolute;-webkit-transform: rotate(7deg);top: 10px;left: 10px;font-size: 40px;font-family: chalkduster;">JUST PRESS IT</p>')
	$('.game-window').append('<p id="p2" style="visibility:hidden;visibility: hidden;color: red;position: absolute;-webkit-transform: rotate(-7deg);right: 10px;bottom: 10px;font-size: 50px;font-family: chalkduster;">PRESS MEEEEEEE</p>')
	$('.game-window').append('<p id="p1" style="visibility:hidden;	visibility: hidden;	color: red;position: absolute;bottom: 10px;font-size: 60px;font-family: chalkduster;">DO IT</p>')
	var buttonTimeout = setTimeout(function(){
		//Correct();
		$("p").remove();
		//level3(); 
		$(".bigbtn").remove();
		Correct();
	}, 7000);
	var p1Timeout = setTimeout(function() {
		$("#p1").css("visibility","visible");
	}, 1000);
	var p2Timeout = setTimeout(function() {
		$("#p2").css("visibility","visible");
	}, 2000);
	var p3Timeout = setTimeout(function() {
		$("#p3").css("visibility","visible");
	}, 3000);
	var p4Timeout = setTimeout(function() {
		$("#p4").css("visibility","visible");
	}, 4000);

	$('#bigButton').click(function() {
		$(".bigbtn").remove();
		$("p").remove();
		window.clearTimeout(buttonTimeout);
		window.clearTimeout(p1Timeout);
		window.clearTimeout(p2Timeout);
		window.clearTimeout(p3Timeout);
		window.clearTimeout(p4Timeout);
		loseLives();
		if (lives > 0) {
			level2(); 
		}
	});
	$("p").click(function() {
		$(".bigbtn").remove();
		$("p").remove();
		window.clearTimeout(buttonTimeout);
		window.clearTimeout(p1Timeout);
		window.clearTimeout(p2Timeout);
		window.clearTimeout(p3Timeout);
		window.clearTimeout(p4Timeout);
		loseLives();
		if (lives > 0) {
			level2(); 
		}
	});
}

function level3() {
	$('#header').text("Who am I?");
	  $('#q-number').attr('src','img/level16.png');
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
			var name = 'img/mark.png';
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
		        $('#game-window').html("");
		        $('#mark').remove();
		        end();
	    	},1000);
			}
		}
		else{
			
			console.log("wrong!");
			loseLives();
			mark_count = 0;
			var name = 'img/mark.png';
			$('#mark').attr('src',name);
		}

	})
	
}

