var move = 0;
var id = 0;

//        player turn function        //
var playerMove = function() { 
    // If it doesnt have the class selected, do everything in this function
    // If it didnt have the class selected (if it got into the if statement)
    // Add the class selected to that element
    // The reason we do this is so that the next time this function runs, this element will have the class selected and not go into the if statement




if (!$(this).hasClass('selected')) {  //logical operator !, if it doesn't have the class selected. then
$(this).addClass('selected')        // if this doesn't the class selected THEN add the class
  if (move === 0) {
    $(this).html('X');
    move += 1;
    id = parseInt($(this).attr('id')) -1 ; // pushing the id of the box into the array
    gameValue[id] = 'X'; // inserting the value to the key
    console.log(id); //the key to assign the value 
    console.log(gameValue); //display the array 

  } else {
    $(this).html('O');
    move -= 1;
    id = parseInt($(this).attr('id')) -1 ; //change the string into a number
    gameValue[id] = 'O'; // push the ID into the array
    console.log(id); //
    console.log(gameValue); //display the array
  }
  endGame(); }
};


$(".gameBoard").on('click', playerMove);


// creating an array to store the moves, subsequently to determined who wins the game. 

var gameValue = ["", "", "", "", "", "", "", "", ""]



//        win game function        //

var winGame = function(a, b, c) { // spit out the results so it can be used again.
  return $('#' + a).text() + $('#' + b).text() + $('#' + c).text();
}



var noMove = function (a,b,c) {
  if ($('#' + a).text() === ('X') || $('#' + b).text  || $('#' + c).text === O || X ); {
    console.log($('#sidePanel').html('that move is not allowed'));
  }
};


var endGame = function() {
  if (winGame(1, 2, 3) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(1, 2, 3) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(4, 5, 6) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(4, 5, 6) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(7, 8, 9) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(7, 8, 9) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(1, 4, 7) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(1, 4, 7) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(2, 5, 8) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(2, 5, 8) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(3, 6, 9) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(3, 6, 9) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(1, 5, 9) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(1, 5, 9) === 'OOO') {
    $('h1').html('player O has won');

  } else if (winGame(3, 5, 7) === 'XXX') {
    $('h1').html('player X has won');

  } else if (winGame(3, 5, 7) === 'OOO') {
    $('h1').html('player O has won');

  }
};


//          reset game function      ///
var resetGame = function () {
  $('.gameBoard').html('');
  gameValue = ["", "", "", "", "", "", "", "", ""]; //resets array 
  move = 0;         //resets the move back to zero 
  $('h1').html('tic tac toe');      //resets the heading
  console.clear(); //clears the console 
  $('.selected').removeClass('selected'); //remove any existing class that has been selected
};

$("#reset").on('click', resetGame);






