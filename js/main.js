
var move = 0;
var id = 0;


/*
     _   _   _   _   _   _     _   _   _   _     _   _   _   _   _   _   _   _   
    / \ / \ / \ / \ / \ / \   / \ / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ / \  
   ( P | L | A | Y | E | R ) ( M | O | V | E ) ( F | U | N | C | T | I | O | N ) 
    \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/  
*/

var playerMove = function() { 

    // If it doesnt have the class selected, do everything in this function
    // If it didnt have the class selected (if it got into the if statement)
    // Add the class selected to that element
    // The reason we do this is so that the next time this function runs, this element will have the class selected and not go into the if statement


if (!$(this).hasClass('selected')) {   
$(this).addClass('selected')           // reset function. THANK U WOLF! (jack)
  if (move === 0) {
    $(this).html('X');
    move += 1;
    id = parseInt($(this).attr('id')) -1 ; // pushing the id of the box into the array
    gameValue[id] = 'X';                   // inserting the value to the key
    console.log(id);                       //the key to assign the value 
    console.log(gameValue);                //display the array 

  } else {
    move -= 1;  
    $(this).html('O');
    id = parseInt($(this).attr('id')) -1 ;  //change the string into a number
    gameValue[id] = 'O';                    // push the ID into the array
    console.log(id); 
    console.log(gameValue);                 //display the array
  }
  endGame(); }
};


$(".gameBoard").on('click', playerMove);


// creating an array to store the moves.

var gameValue = ["", "", "", "", "", "", "", "", ""]



/*
     _   _   _     _   _   _   _     _   _   _   _   _   _   _   _   
    / \ / \ / \   / \ / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ / \  
   ( W | I | N ) ( G | A | M | E ) ( F | U | N | C | T | I | O | N ) 
    \_/ \_/ \_/   \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/  
*/

var winGame = function(a, b, c) {             // spit out the results so it can be used again.
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

// win game function, THANK YOU MARIO! 

/*
#     _   _   _   _   _     _   _   _   _     _   _   _   _   _   _   _   _   
#    / \ / \ / \ / \ / \   / \ / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ / \  
#   ( R | E | S | E | T ) ( G | A | M | E ) ( F | U | N | C | T | I | O | N ) 
#    \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/

var resetGame = function () {
  $('.gameBoard').html('');
  gameValue = ["", "", "", "", "", "", "", "", ""]; //resets array 
  move = 0;         //resets the move back to zero 
  $('h1').html('tic tac toe');      //resets the heading
  console.clear(); //clears the console 
  $('.selected').removeClass('selected'); //remove any existing class that has been selected
};

$("#reset").on('click', resetGame);


/*
   _    _    _     _    _    _    _    _     _    _    _    _    _    _    _  
  / \  / \  / \   / \  / \  / \  / \  / \   / \  / \  / \  / \  / \  / \  / \ 
 ( B )( O )( X ) ( H )( O )( V )( E )( R ) ( O )( P )( A )( C )( I )( T )( Y )
  \_/  \_/  \_/   \_/  \_/  \_/  \_/  \_/   \_/  \_/  \_/  \_/  \_/  \_/  \_/ 
*/

var overBox = function() {
  $(this).css({
    'opacity': 0.4
  });
};

var offBox = function() {
  $(this).css({
    'opacity': 1
  });
};

$('.gameBoard').on('mouseover', overBox);
$('.gameBoard').on('mouseleave', offBox);

// THANK YOU JOSH! 




// var gameCursor = function() {

//   if (move === 0) {
//     $('gameBoard').css({'cursor':'url(http://i.imgur.com/weu8kXG.png), auto'});
//     move += 1;
//   } else {
//     $('gameBoard').css({'cursor':'url(http://i.imgur.com/weu8kXG.png), auto'});
//     move -=1;
//   }
// };

//<a href="http://imgur.com/wVFMQwM"><img src="http://i.imgur.com/wVFMQwM.gif" title="source: imgur.com" /></a
//$(this).append('<img src="http://i.imgur.com/wVFMQwM.gif">');