state = 0;

$(document).ready(function() {

});

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
		$('.game-window').append('<button class="a" type="button" onclick="Incorrect()">' + answers_1[0] + '</button>');
		$('.game-window').append('<button class="b" type="button" onclick="Incorrect()">' + answers_1[1] + '</button>');
		$('.game-window').append('<button class="c" type="button" onclick="Correct()">' + answers_1[2] + '</button>');
		$('.game-window').append('<button class="d" type="button" onclick="Incorrect()">' + answers_1[3] + '</button>');
}

function question2() {
  console.log("question2!");
  $('.game-window').html("");
  var question_2 = "Click the Answer";
	var answers_2 = [
		"A",
		"B",
		"C",
		"D"
	]
  $('.game-window').append('<h2 class="q2" id="q_2">' + question_2 + '</h2>');
  $('.game-window').append('<button class="a" type="button" onclick="Incorrect()">' + answers_2[0] + '</button>');
  $('.game-window').append('<button class="b" type="button" onclick="Incorrect()">' + answers_2[1] + '</button>');
  $('.game-window').append('<button class="c" type="button" onclick="Correct()">' + answers_2[2] + '</button>');
  $('.game-window').append('<button class="d" type="button" onclick="Incorrect()">' + answers_2[3] + '</button>');
}

function question3() {
  console.log("question3!");
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
