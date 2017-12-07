state = 0;

function question1() {
  console.log("question1!");
   $('#q-number').attr('src','img/level1.png');
    $('#num_lives').attr('src','img/3_lives.png');
  $('#q-number').css('visibility','visible');
  var lives= 3;
 // $('#header').css('display', 'none');
 //  $('#details').css('display', 'none');
 //  $('.startImg').css('display', 'none');
  var question_1 = "Click the Blue";
	var answers_1 = [
		"Blue",
		"Red",
		"the Blue",
		"Blooregard 'Bloo' Q. Kazoo"
	]

		$('#header').text(question_1);
		$('.startIMG').append('<button class="q1 answer_button0"  type="button" onclick="Incorrect()">' + answers_1[0] + '</button>');
		$('.startIMG').append('<button class="q1 answer_button1"  type="button" onclick="Incorrect()">' + answers_1[1] + '</button>');
		$('.startIMG').append('<button class="q1 answer_button2"  type="button" onclick="Correct()">' + answers_1[2] + '</button>');
		$('.startIMG').append('<button class="q1 answer_button3" id = "d" type="button" onclick="Incorrect()">' + answers_1[3] + '</button>');


$('.q1').hover(function() {
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
            $(this).css('background', "url('./img/Blue-hover.png')");
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
        $(this).css('background', "url('./img/Blue_Button.png')");
      }
    });




}

function question2() {
  console.log("question2!");
    $('#q-number').attr('src','img/level2.png');
  $('.q1').remove();
  var question_2 = "Questioning the choice of color";
	var answers_2 = [
		"I'm colorblind",
		"I'm genderblind",
		"I am blind",
		"My cat got stuck in the blinds"
	]
  $('#header').text(question_2);
  $('#header').append('<h2 id="qmark">?</h2>');

  $('.startIMG').append('<button class="q2 answer_button0"  type="button" onclick="Incorrect()">' + answers_2[0] + '</button>');
  $('.startIMG').append('<button class="q2 answer_button1" type="button" onclick="Incorrect()">' + answers_2[1] + '</button>');
  $('.startIMG').append('<button class="q2 answer_button2"  type="button" onclick="Incorrect()">' + answers_2[2] + '</button>');
  $('.startIMG').append('<button class="q2 answer_button3"  type="button" onclick="Incorrect()">' + answers_2[3] + '</button>');
  $('#qmark').click(function() {
    Correct();
  });

   $('.q2').hover(function() {
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


}
function question3() {
  console.log("question3!");
    $('#q-number').attr('src','img/level3.png');
  $('.q2').remove();
  var question_3 = "Pick the best team!";
 $('#header').text(question_3);
  $('.startIMG').append('<img class="q3" id="mich" style="position:absolute;" src="img/michigan.png"></img><br class="q3"><br class="q3">');
  $('.startIMG').append('<img class="q3" id="osu" src="img/osu.png"></img><br class="q3"><br class="q3">');
  $('.startIMG').append('<img class="q3" id="minn" src="img/minn.png"></img><br class="q3"><br class="q3">');
  $('.startIMG').append('<img class="q3" id="penn" src="img/penn.png"></img>');
  let width = $('.game-window').width()-75;
  $('#osu').css('left',width);
  $('#penn').css('left',width);

    function first() {
      $("#mich").animate({
        left: width
      }, 2500, function() {
      });
        $("#osu").animate({
        left: 0
      }, 2500, function() {
      });
      $("#minn").animate({
        left: width
      }, 2500, function() {
      });
        $("#penn").animate({
        left: 0
      }, 2500, function() {
      });
     var firstTime = setTimeout(second, 25);
    }
    function second() {
        $("#mich").animate({
        left: 0
      }, 2500, function() {
      });
        $("#osu").animate({
        left: width
      }, 2500, function() {
      });
      $("#minn").animate({
        left: 0
      }, 2500, function() {
      });
        $("#penn").animate({
        left: width
      }, 2500, function() {
      });
      var secondTime = setTimeout(first, 25);
    }

    setTimeout(first, 25);

    $('#mich').click(function() {
      Correct();
    });
    $('#osu').click(function() {
      Incorrect();
      $('#mich').finish();
      $('#osu').finish();
      $('#minn').finish();
      $('#penn').finish();
      $('#mich').css('left',0);
      $('#osu').css('left',width);
      $('#minn').css('left',0);
      $('#penn').css('left',width);
    });
    $('#minn').click(function() {
      Incorrect();
      $('#mich').finish();
      $('#osu').finish();
      $('#minn').finish();
      $('#penn').finish();
      $('#mich').css('left',0);
      $('#osu').css('left',width);
      $('#minn').css('left',0);
      $('#penn').css('left',width);
    });
    $('#penn').click(function() {
      Incorrect();
      $('#mich').finish();
      $('#osu').finish();
      $('#minn').finish();
      $('#penn').finish();
      $('#mich').css('left',0);
      $('#osu').css('left',width);
      $('#minn').css('left',0);
      $('#penn').css('left',width);
    });
}

function question4() {
  console.log("question4!");
    $('#q-number').attr('src','img/level4.png');
  $('.q3').remove();
  var question_4 = "Click to cram for the EECS 493 exam!";
  $('#header').text(question_4);

  $('.startIMG').append('<img class="q4" id="bar" src="img/greenbar.png"></img>');
  $('.startIMG').append('<img class="q4" id="brain" src="img/brain1.png"></img><br class="q4"><br class="q4">');
  $('.startIMG').append('<button class="q4" id="brainButton" type="button" onclick="Pump()">Study!</button>');
  $('.startIMG').append('<img class="q4" id="widgetHome" src="img/widgethome.png" style="visibility: hidden"></img>');
  $('.startIMG').append('<img class="q4" id="jquery" src="img/jquery.png" style="visibility: hidden"></img>');
  $('.startIMG').append('<img class="q4" id="angular" src="img/angular.png" style="visibility: hidden"></img>');
  $('.startIMG').append('<button class="q4" id="timer" type="button" disabled>10</button>');
  $('.startIMG').append('<p class="q4" id="hurry">Hurry up!</p>');
 // $('#brainButton').css('left','0');

  var x = 10;
  y = setInterval(function() {
    --x;
    if (x <= -1) {
      Incorrect();
      // clearInterval(y);
      $('#hurry').css("visibility", "hidden");
      $('#timer').css("color", "black");
      x = 10;
    } else {
      $('#timer').html(x);
      if (x == 5) {
        $('#hurry').css("visibility", "visible");
        $('#timer').css("color", "red");
      }
    }

  }, 1000);
}


function Pump() {
  let w = $('#bar').width();
  console.log(w);
  if (w >= 100) {
    $('#widgetHome').css("visibility", "visible");
    $('#brain').attr("src","img/brain2.png");
  }
  if (w >= 200) {
    $('#jquery').css("visibility", "visible");
    $('#brain').attr("src","img/brain3.png");
  }
  if (w >= 300) {
    $('#angular').css("visibility", "visible");
    $('#brain').attr("src","img/brain4.png");
  }
  if (w >= 350) {
    clearInterval(y);
    win();
  }
  $('#bar').css("width", w+10);
}

function win() {
  $('.q4').remove();
  Correct();
}

function Correct() {
  console.log(state);
  clickCorrect();
  // ++state;
  // switch (state) {
  //   case 1:
  //       question2();
  //     break;
  //   case 2:
  //       question3();
  //     break;
  //   case 3:
  //       question4();
  //     break;
  //   case 4:
  //       level9();
  //     break;
  //   case 5:
  //     level10();
  //     break;
  //   case 6:
  //     level11();
  //     break;
  //   case 7:
  //     level12();
  //     break;
  //   case 8:
  //     level13();
  //     break;
  //    case 18:
  //     level1();
  //     break;
  //   case 19:
  //     level2();
  //     break;
  //   case 20:
  //     level3();
  //     break;
  //   default:
  //     break;
  // }

}

function Incorrect() {
  //alert("Wrong!");
  loseLives();
}

function populate() {
  console.log("populate!");
  Correct();
  // $('.game-window').html("<input type='image' src='img/startbutton.png' width='200' height='120'/>");
  // $('.game-window').append("<input type='image' src='img/startbutton.png' width='200' height='120' class='b'/><br><br><br><br><br><br>");
  // $('.game-window').append("<input type='image' src='img/startbutton.png' width='200' height='120' class='c'/>");
  // $('.game-window').append("<input type='image' src='img/startbutton.png' width='200' height='120' class='d'/>");
}
