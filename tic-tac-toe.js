document.addEventListener('DOMContentLoaded', function() {
    var board = document.getElementById('board');
    var squares = board.getElementsByTagName('div');
    var game = Array(squares.length).fill(null); // Initialize game state
    var turn = 'X'; // Start with player X
  
    function updateGameState(index) {
      if (game[index] === null) {
        game[index] = turn;
        switchTurn();
      }
    }
  
    function renderSquare(index) {
      squares[index].textContent = game[index];
      squares[index].classList.add(game[index]);
    }
  
    function switchTurn() {
      turn = turn === 'X' ? 'O' : 'X';
    }
  
    function handleSquareHover(index) {
      squares[index].classList.toggle('hover');
    }
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add('square');
      squares[i].addEventListener('click', function(e) {
        var index = Array.prototype.indexOf.call(squares, e.target);
        updateGameState(index);
        renderSquare(index);
      });
      
      squares[i].addEventListener('mouseover', function(e) {
        var index = Array.prototype.indexOf.call(squares, e.target);
        handleSquareHover(index);
      });
  
      squares[i].addEventListener('mouseout', function(e) {
        var index = Array.prototype.indexOf.call(squares, e.target);
        handleSquareHover(index);
      });
    }
  });
  