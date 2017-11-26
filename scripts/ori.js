state = 0;

function question1() {
  console.log("question1!");
  $('#header').css('display', 'none');
  $('#details').css('display', 'none');
  $('.startImg').css('display', 'none');
  var question_1 = "Click the Blue";
	var answers_1 = [
		"Blue",
		"Red",
		"the Blue",
		"Blooregard 'Bloo' Q. Kazoo"
	]

		$('.game-window').append('<h2 class="q1" id="q_1">' + question_1 + '</h2>');
		$('.game-window').append('<button class="q1" id="a" type="button" onclick="Incorrect()">' + answers_1[0] + '</button>');
		$('.game-window').append('<button class="q1" id="b" type="button" onclick="Incorrect()">' + answers_1[1] + '</button>');
		$('.game-window').append('<button class="q1" id="c" type="button" onclick="Correct()">' + answers_1[2] + '</button>');
		$('.game-window').append('<button class="q1" id="d" type="button" onclick="Incorrect()">' + answers_1[3] + '</button>');
}

function question2() {
  console.log("question2!");
  $('.q1').remove();
  var question_2 = "Questioning the choice of color";
	var answers_2 = [
		"I'm colorblind",
		"I'm genderblind",
		"I am blind",
		"My cat got stuck in the blinds"
	]
  $('.game-window').append('<h2 class="q2" id="q_2">' + question_2 + '</h2>');
  $('.game-window').append('<h2 class="q2" id="mark">?</h2>');
  $('.game-window').append('<br class="q2"><br class="q2"><br class="q2"><br class="q2">');
  $('.game-window').append('<button class="q2" id="e" type="button" onclick="Incorrect()">' + answers_2[0] + '</button>');
  $('.game-window').append('<button class="q2" id="f" type="button" onclick="Incorrect()">' + answers_2[1] + '</button>');
  $('.game-window').append('<button class="q2" id="g" type="button" onclick="Incorrect()">' + answers_2[2] + '</button>');
  $('.game-window').append('<button class="q2" id="h" type="button" onclick="Incorrect()">' + answers_2[3] + '</button>');
  $('#mark').click(function() {
    Correct();
  });
}
function question3() {
  console.log("question3!");
  $('.q2').remove();
  var question_3 = "Pick the best team!";
  $('.game-window').append('<h2 class="q3" id="q_3">' + question_3 + '</h2>');
  $('.game-window').append('<img class="q3" id="mich" src="img/michigan.png"></img><br class="q3"><br class="q3">');
  $('.game-window').append('<img class="q3" id="osu" src="img/osu.png"></img><br class="q3"><br class="q3">');
  $('.game-window').append('<img class="q3" id="minn" src="img/minn.png"></img><br class="q3"><br class="q3">');
  $('.game-window').append('<img class="q3" id="penn" src="img/penn.png"></img>');
  let width = $('.game-window').width() - 75;

    function goRight() {
      $("#mich").animate({
        left: width
      }, 2500, function() {
      });
        $("#osu").animate({
        left: width
      }, 2500, function() {
      });
      $("#minn").animate({
        left: width
      }, 2500, function() {
      });
        $("#penn").animate({
        left: width
      }, 2500, function() {
      });
     setTimeout(goLeft, 25);
    }
    function goLeft() {
        $("#mich").animate({
        left: 0
      }, 2500, function() {
      });
        $("#osu").animate({
        left: 0
      }, 2500, function() {
      });
      $("#minn").animate({
        left: 0
      }, 2500, function() {
      });
        $("#penn").animate({
        left: 0
      }, 2500, function() {
      });
      setTimeout(goRight, 25);
    }

    setTimeout(goRight, 25);

    $('#mich').click(function() {
      Correct();
    });
    $('#osu').click(function() {
      Incorrect();
    });
    $('#penn').click(function() {
      Incorrect();
    });
}

function question4() {
  console.log("question4!");
  $('.q3').remove();
  var question_4 = "Click to cram for the EECS 493 exam!";
  $('.game-window').append('<h2 class="q4" id="q_4">' + question_4 + '</h2>');
  $('.game-window').append('<button class="q4" id="brainButton" type="button" onclick="Pump()">Study!</button>');
  $('.game-window').append('<img class="q4" id="bar" src="img/greenbar.png"></img>');
  $('.game-window').append('<img class="q4" id="brain" src="img/brain1.png"></img><br class="q4"><br class="q4">');
  $('.game-window').append('<img class="q4" id="widgetHome" src="img/widgethome.png" style="visibility: hidden"></img>');
  $('.game-window').append('<img class="q4" id="jquery" src="img/jquery.png" style="visibility: hidden"></img>');
  $('.game-window').append('<img class="q4" id="angular" src="img/angular.png" style="visibility: hidden"></img>');

}


function Pump() {
  let w = $('#bar').width();
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
    win();
  }
  $('#bar').css("width", w+10);
}

function win() {
  $('.q4').remove();
  alert("You win!")
}

function Correct() {
  ++state;
  switch (state) {
    case 1:
        question1();
      break;
    case 2:
        question2();
      break;
    case 3:
        question3();
      break;
    case 4:
        question4();
      break;
    default:
      break;
  }

}

function Incorrect() {
  alert("Wrong!");
}

function populate() {
  console.log("populate!");
  Correct();
  // $('.game-window').html("<input type='image' src='img/startbutton.png' width='200' height='120'/>");
  // $('.game-window').append("<input type='image' src='img/startbutton.png' width='200' height='120' class='b'/><br><br><br><br><br><br>");
  // $('.game-window').append("<input type='image' src='img/startbutton.png' width='200' height='120' class='c'/>");
  // $('.game-window').append("<input type='image' src='img/startbutton.png' width='200' height='120' class='d'/>");
}

$(document).ready(function() {

});
