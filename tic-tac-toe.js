document.addEventListener('DOMContentLoaded', function() {
    var board = document.getElementById('board');
    var squares = board.getElementsByTagName('div');
    var game = Array(squares.length).fill(null); // Initialize game state
    var turn = 'X'; // Start with player X
    var gameWon = false;
  
    function updateGameState(index) {
      if (!gameWon && game[index] === null) {
        game[index] = turn;
        renderSquare(index);
        if (checkWinner()) {
          announceWinner();
        } else {
          switchTurn();
        }
      }
    }
  
    function renderSquare(index) {
      squares[index].textContent = game[index];
      squares[index].classList.add(game[index]);
    }
  
    function switchTurn() {
      turn = turn === 'X' ? 'O' : 'X';
    }
  
    function checkWinner() {
      const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (game[a] && game[a] === game[b] && game[a] === game[c]) {
          gameWon = true;
          return true;
        }
      }
  
      return false;
    }
  
    function announceWinner() {
        var status = document.getElementById('status');
        status.textContent = `Congratulations! ${turn} is the Winner!`;
        status.classList.add('you-won');
      }
      
    function handleSquareHover(index) {
      squares[index].classList.toggle('hover');
    }
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add('square');
      squares[i].addEventListener('click', function(e) {
        var index = Array.prototype.indexOf.call(squares, e.target);
        updateGameState(index);
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
  