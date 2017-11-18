function level9(){
	console.log("Welcome to Level 9");
	  $('#header').text("What is the 7th letter of the alphabet?");
	  var answers = [
	  	'G','H','I','J'
	  ]
	  $('#details').hide();
	  $('.startIMG').empty();

	  console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL9-'" + i + "' class='answer_button'>"+answers[i]+"</button>";
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
function level10(){
console.log("Welcome to Level 10");
 $('#header').text("What is this?");
	  var answers = [
	  	'Kiwi','Nectarine','Apple','Berry'
	  ]
	  $('#details').hide();
	  $('.startIMG').empty();
	  var banana_count = 0;

	  console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL10-" + i + "' class='answer_button'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startIMG').append(buttonsDiv);
     };

     	$('.startIMG').after("<br/>");
     	$('.game-window').append("<img id='banana' src='img/Banana_0.png'></div>");

     $('.answer_button').hover(function() {
        //mouse over
        $(this).css('background', '#ff0')
    }, function() {
        //mouse out
        $(this).css('background', 'white')
    });

     $('.answer_button').click(function(){
     	console.log($(this).attr('id'));
     	if($(this).attr('id') == 'answerL10-0'){
     		alert("wrong");
     		console.log('incorrect');
     		count = 0;
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
     			alert('correct');
     			console.log("YAY");
     		},1000);
     	}
     	}
     	else if($(this).attr('id') == 'answerL10-3' && (banana_count==0)){
     		banana_count++;
     		var name = 'img/Banana_'+banana_count+'.png';
     		$('#banana').attr('src',name);
     	}
     	else{
     		alert("incorrect");
     		console.log("wrong!");
     		banana_count = 0;
     		var name = 'img/Banana_'+banana_count+'.png';
     		$('#banana').attr('src',name);
     	}

     })


}
var DisneyIdx = 0;
var game = 0;
function level11(){
 console.log("Welcome to Level 10");
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
  var startingPosition = Math.random() * ($('.game-window').width()-DisneySize-200);  // Using 50px as the size of the alien (since no instance exists yet)
  
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
    	alert("correct");
    	console.log('correct');
  
    	game = 0;
    	$('.Disney').remove();
    }
    else{
    	alert("wrong");
    	console.log('incorrect');
    	$('.Disney').remove();
    	game = 1;

    }



  });

}

//----------------------------------------





 

function level12(){
	console.log("Welcome to Level 12");
	var change = 0;
	  $('#header').text("Watch Carefully.....");
	  var answers = [
	  	' ',' ',' ',' '
	  ]
	  $('#details').hide();
	  $('.startIMG').empty();

	  console.log(answers.length);
	   for (var i = 0; i < 4; i++) {
        var buttonsDiv = "<button id='answerL12-" + i + "' class='answer_button'>"+answers[i]+"</button>";
        console.log(answers[i]);
        $('.startIMG').append(buttonsDiv);
     };

      setTimeout(
      	function() {
      	for (var i = 0; i < 4; i++) {
      		thing = '#answerL12-' + i;
        if( thing == '#answerL12-0'){
     		$(thing).css('background', '#ff0');
     	}
     	else{
     		 $(thing).css('background', 'green');
     	}
     }

     }, 5000);

     setTimeout(
      	function() {
      	    $('#header').text("Alright, now pick!");
      	    change = 1;
     		$('.answer_button').css('background', 'white');

     
    }, 5050); 

     $('.answer_button').click(function(){
     	if(change == 0){
     		console.log("incorrect");
     		alert('wrong!');

     	}
     	else{
     	if($(this).attr('id') == 'answerL12-0'){
     		console.log("correct");
     		alert("correct");
     	}
     	else{
     		console.log("incorrect");
     		alert('wrong!');
     		change = 0;
     	}
     }
     });
 

}
$(document).ready(function() {
	level11();


});