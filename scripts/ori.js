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
		$('.game-window').append('<button id="a" type="button" onclick="Incorrect()">' + answers_1[0] + '</button>');
		$('.game-window').append('<button id="b" type="button" onclick="Incorrect()">' + answers_1[1] + '</button>');
		$('.game-window').append('<button id="c" type="button" onclick="Correct()">' + answers_1[2] + '</button>');
		$('.game-window').append('<button id="d" type="button" onclick="Incorrect()">' + answers_1[3] + '</button>');
}

function question2() {
  console.log("question2!");
  $('.game-window').html("");
  var question_2 = "Questioning the choice of color";
	var answers_2 = [
		"I'm colorblind",
		"I'm genderblind",
		"I am blind",
		"My cat got stuck in the blinds"
	]
  $('.game-window').append('<h2 class="q2" id="q_2">' + question_2 + '</h2>');
  $('.game-window').append('<h2 id="mark">?</h2><br><br><br><br>');
  $('.game-window').append('<button id="e" type="button" onclick="Incorrect()">' + answers_2[0] + '</button>');
  $('.game-window').append('<button id="f" type="button" onclick="Incorrect()">' + answers_2[1] + '</button>');
  $('.game-window').append('<button id="g" type="button" onclick="Incorrect()">' + answers_2[2] + '</button>');
  $('.game-window').append('<button id="h" type="button" onclick="Incorrect()">' + answers_2[3] + '</button>');
}
function question3() {
  console.log("question3!");
  $('.game-window').html("");
}

function question4() {
  console.log("question4!");
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
  $('#mark').click(function() {
    alert("click!");
  });
});
