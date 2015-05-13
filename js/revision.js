var move = 0; //turn counter  
var id = 0;  //
var playerWinX = 'XXX';
var playerWinO = 'OOO';

var playerMove = function() {
    if (move === 0) {
      $(this).html('X');
      move +=1;

    } else {
      $(this).html('O');
      move -=1;
    }
  }

//$(".gameBoard").on('click', playerMove)};
$(".gameBoard").on('click', playerMove);







