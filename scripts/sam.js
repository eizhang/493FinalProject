
function level9(){
state =4;
	console.log("Welcome to Level 5");
    $('#q-number').attr('src','img/level5.png');
	  $('#header').text("What is the 7th letter of the alphabet?");
	  var answers = [
	  	'G','H','I','J'
	  ]
	  $('.startIMG').empty();

	  console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button class='answer_button L9 answer_button"+i+"' >"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startIMG').append(buttonsDiv);
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

     	if($(this).text() == 'H'){
     		console.log("correct");
        $('.startIMG').empty();
        $('.answer_button').empty();
        Correct();
     	}
     	else{
     		console.log("incorrect");
     		
        loseLives();

     	}
     });
	  



}
function level10(){

console.log("Welcome to Level 6");
  $('#q-number').attr('src','img/level6.png');
 $('#header').text("What is this?");
  $('#header').css('margin-right', '100');
	  var answers = [
	  	'Kiwi','Nectarine','Apple','Berry'
	  ]
	  $('#details').hide();
    $('.game-window').append("<img id='banana' src='img/Banana_0.png'></div>");
  
    $('#banana').css('height','200px');
    $('#banana').css('width','200px');
	  $('.startIMG').empty();
	  var banana_count = 0;

	  console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL10-" + i + "'class='answer_button L10 answer_button"+i+"'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startIMG').append(buttonsDiv);
     };
      //$('.answer_button1').css('top','35%');
      // $('.answer_button0').css('top','35%');

    // 	$('.startIMG').after("<br/>");
     	//$('.game-window').append("<img id='banana' src='img/Banana_0.png'></div>");

  
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
     	console.log($(this).attr('id'));
     	if($(this).attr('id') == 'answerL10-0'){
     	
     		console.log('incorrect');
        loseLives();
     		banana_count = 0;
        var name = 'img/Banana_'+banana_count+'.png';
        $('#banana').attr('src',name);
     	}
     	else if($(this).attr('id') == 'answerL10-1' && (banana_count==2 || banana_count == 4)){
     		banana_count++;
     		var name = 'img/Banana_'+banana_count+'.png';
     		$('#banana').attr('src',name);
     	}
     	else if($(this).attr('id') == 'answerL10-2' && (banana_count==1 || banana_count == 3 || banana_count ==5)){
     			banana_count++;
     		var name = 'img/Banana_'+banana_count+'.png';
     		$('#banana').attr('src',name);
     		if(banana_count == 6){
     		setTimeout(function(){
     			console.log("YAY");
           $('.startIMG').empty();
        $('.answer_button').empty();
        Correct();
        $('#game-window').html("");
        $('#banana').remove();

     		},1000);
     	}
     	}
     	else if($(this).attr('id') == 'answerL10-3' && (banana_count==0)){
     		banana_count++;
     		var name = 'img/Banana_'+banana_count+'.png';
     		$('#banana').attr('src',name);
     	}
     	else{
     		
     		console.log("wrong!");
        loseLives();
     		banana_count = 0;
     		var name = 'img/Banana_'+banana_count+'.png';
     		$('#banana').attr('src',name);
     	}

     })


}
var DisneyIdx = 0;
var game = 0;
function level11(){
 console.log("Welcome to Level 7");
   $('#q-number').attr('src','img/level7.png');
 $('#header').text("Booyah!");
   $('#details').hide();
	$('.startIMG').empty();
	game = 1;
	alien_loop();

}
 function alien_loop(){
    
 	
    var rand = (2 + (Math.random() - 0.5) * 0.5 ) / 3;
    

     setTimeout(function(){
      if(game == 1){
          createDisney();
      
      alien_loop();
  }

    }, rand*1000);
 
 }

 ///-------------------------
 function createDisney() {
  

  // NOTE: source - 
  var DisneyDivStr = "<div id='D-" + DisneyIdx + "' class='Disney'></div>"


  
  // Add the alien to the screen
  $('.game-window').append(DisneyDivStr);
  // Create and alien handle based on newest index
  var curDisney = $('#D-'+DisneyIdx);

  DisneyIdx = DisneyIdx+1;  // update the index to maintain uniqueness next time
  
  // Set size of the alien (semi-randomized)
  var DisneySize = 30 + (Math.random() * (160 - 110));
  curDisney.css('width', DisneySize+"px");
  curDisney.css('height', DisneySize+"px");
  curDisney.css('position', 'absolute');
  var randomNumberBetween1and4 = Math.ceil(Math.random() * 4);
  var img_name = 'img/Disney' + randomNumberBetween1and4 +'.png';
  curDisney.append("<img src='"+img_name+"' class = 'd-"+randomNumberBetween1and4+ "' height='" + DisneySize + "'/>");

  /* NOTE: This position calculation has been moved lower since verD -- this
  **       allows us to adjust position more appropriately.
  **/
  // Pick a random starting position within the game window
  var startingPosition = Math.random() * ($('.game-window').width()-DisneySize-100);  // Using 50px as the size of the alien (since no instance exists yet)
  
  // Set the instance-specific properties
  curDisney.css('right', startingPosition+"px");

  // Make the aliens fall towards the bottom

  setInterval( function() {
    curDisney.css('top', parseInt(curDisney.css('top'))+2);
    // Check to see if the alien has left the game/viewing window
    if (parseInt(curDisney.css('top')) > ($('.game-window').height() - curDisney.height())) {
       curDisney.remove();

      //update number of lives? so that number of lives isnt constantly removed
    }
  }, 50);

  
  
  $('.Disney').unbind().click(function(event){
  	event.stopPropagation();
  console.log($(this).children('img').attr('src'));
    if($(this).children('img').attr('src') == 'img/Disney4.png'){
    	//alert("correct");
    	console.log('correct');
    
    	game = 0;
    	$('.Disney').remove();
        Correct();
    }
    else{
    	$('.Disney').remove();
      game = 1;
      loseLives();
    	console.log('incorrect');


    }



  });

}

//----------------------------------------





 

function level12(){
	console.log("Welcome to Level 12");
    $('#q-number').attr('src','img/level8.png');
	var change = 0;
	  $('#header').text("Watch Carefully.....");
      $('#header').css('margin-right', '0');
	  var answers = [
	  	' ',' ',' ',' '
	  ]
	  $('#details').hide();
	  $('.startIMG').empty();

	  console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL12-" + i + "'class='answer_button L10 answer_button"+i+"'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startIMG').append(buttonsDiv);
     };

      setTimeout(
      	function() {
      	for (var i = 0; i < 4; i++) {
      		thing = '#answerL12-' + i;
      if(thing == '#answerL12-0'){
             $(thing).css('background', "url('./img/Hover-1.png')");
      }
      else if(thing == '#answerL12-1'){
        $(thing).css('background', "url('./img/watch-carefully2.png')");
      }
      else if(thing == '#answerL12-2'){
        $(thing).css('background', "url('./img/watch-carefully3.png')");
      }
      else{
        $(thing).css('background', "url('./img/watch-carefully4.png')");
      }
     }

     }, 5000);

     setTimeout(
      	function() {
      	    $('#header').text("Alright, now pick!");
      	    change = 1;
              for (var i = 0; i < 4; i++) {
          thing = '#answerL12-' + i;
      if(thing == '#answerL12-0'){
     		     $(thing).css('background', "url('./img/Button-1.png')");
      }
      else if(thing == '#answerL12-1'){
        $(thing).css('background', "url('./img/Button-2.png')");
      }
      else if(thing == '#answerL12-2'){
        $(thing).css('background', "url('./img/Button-3.png')");
      }
      else{
        $(thing).css('background', "url('./img/Button-4.png')");
      }
    }

     
    }, 5080); 

     $('.answer_button').click(function(){
     	if(change == 0){
     		console.log("incorrect");
     		
        loseLives();

     	}
     	else{
     	if($(this).attr('id') == 'answerL12-0'){
     		
          Correct();
     	
     	}
     	else{
     		console.log("incorrect");
    
        loseLives();
     		change = 0;
     	}
     }
     });
 

}

$(document).ready(function() {
  $('#startbtn').click(function(){
    $('#details').hide();
    $('.startIMG').empty();
    $('#word_lives').css('visibility','visible');
    $('#num_lives').css('visibility','visible');
    state = 0;
    lives= 3;
    question1();

  });
  $('#instructionsbtn').click(function(){
    $('#details').hide();
    $('.startIMG').hide();
    $('.game-window').css('font-size','27px');
    $('.game-window').css('font-size','27px');
    $('#header').text("Instructions");
    var info = "<p class='text'>try to beat the quiz by answering all of the questions. It's as simple as that! Or is it..... </p>";
    $('.game-window').append(info);
    info = "<p class='text'>The questions are far from easy. Some require insane logic, others are completely down to guessing. It's hard but it's NOT impossible! </p>";
    $('.game-window').append(info);

    info = "<p class='text'>You have 3 lives throughout the quiz. Get an answer incorrect and you'll lose one. Lose all 3 lives and it's Game Over.</p>";
    $('.game-window').append(info); 
    $('#word_lives').attr('src','img/Go_back.png');
    $('#word_lives').css('visibility','visible');
    state = -1;

  });
	$('#word_lives').click(function(){
    if(state == -1){
    $('#details').show();
    $('.startIMG').show();
    $( ".text" ).remove();
    $('#header').text('The Impossibruuuuu Quiz')
     $('#word_lives').attr('src','img/Lives.png');
     $('#word_lives').css('visibility','hidden');
   }
 
  });


  
});