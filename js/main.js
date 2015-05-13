var move = 0;
var id = 0;
var playerWinX = 'XXX';
var playerWinO = 'OOO';

var playerMove = function() {
  console.log("haa")
  if (move === 0) {
    $(this).html('X');
    move += 1;
    id = parseInt($(this).attr('id')) -1; // id = key 
    gameValue[id] = 'X'; // inserting the value to the key
    console.log(id); //the key to assign the value 
    console.log(gameValue); //display the array 

  } else {
    $(this).html('O');
    move -= 1;
    id = parseInt($(this).attr('id')) -1;  //change the string into a number
    gameValue[id] = 'O';         // push the ID into the array
    console.log(id); //
    console.log(gameValue); //display the array
  }
  endGame();
};

$(".gameBoard").on('click', playerMove);


// creating an array to store the moves, subsequently to determined who wins the game. 

var gameValue = ["","","","","","","","",""]


// var winGame = function() {
//   if (gameValue.indexOf(1) > -1 && gameValue.indexOf(2) > -1 && gameValue.indexOf(3) > -1) {    //if the index is false 
//     alert("woo")
//   } else if (gameValue.indexOf(4) > -1 && gameValue.indexOf(5) > -1 && gameValue.indexOf(6) > -1) {
//     alert ("woo")
//   } else if (gameValue)   //insert the else if for winGame conditions in here. 
// }

var winGame = function (a,b,c) {
  return $('#' + a).text() + $('#' + b).text() + $('#' + c).text();     // spit out the results so it can be used again.
}

var endGame = function() {
    if (winGame(1, 2, 3) === 'XXX' || winGame(1, 2, 3) === 'OOO') {
      console.log('you win!')

    } else if (winGame(4, 5, 6) === 'XXX' || winGame(4, 5, 6) === 'OOO') {
      console.log('you win!')

    } else if (winGame(7, 8, 9) === 'XXX' || winGame(7, 8, 9) === 'OOO') {
      console.log('you win!')

    } else if (winGame(1, 4, 7) === 'XXX' || winGame(1, 4, 7) === 'OOO') {
      console.log('you win!')

    } else 
        //     (gameWinH2 === 'XXX' || 'OOO'){
        //   } else if 
        //     (gameWinH3 === 'XXX' || 'OOO'){
        //   } else if  
        //     (gamewinV1 === 'XXX' || 'OOO'){ 
        //   } else if  
        //     (gamewinV2 === 'XXX' || 'OOO'){
        //   } else if   
        //     (gamewinV3 === 'XXX' || 'OOO'){
        //   } else if 
        //     (gamewinD1 === 'X','X','X' || 'O','O','O'){
        //   } else  {
        //     (gamewinD2 === 'X','X','X' || 'O','O','O');
        // }
        // };
    }
  //var noMove = function () { 

//  if (playerMove < ) { 

// }

// }




//   var createBoard = function (boxCount) {
//     for (var i= 0; i < boxCount; i++ ) {
//       $('<div></div>').addClass('gameBoard').appendTo('#container');
//     }
//   }

//   createBoard (9); 

// }); 

// var toggleColor = 0 ;
// var currentColor = 'red';

// $( ".gameBoard" ).click(function() {

//  var color = $(this).css('background-color');
//  console.log(color);
//  $(this).css({'background-color': currentColor});



//   if (currentColor === 'red') {
//       currentColor = 'yellow';
//   } else if (currentColor === 'yellow') {
//       currentColor = 'red';
//   } 
//$(this).css('background-color', 'green');
//   });

// });