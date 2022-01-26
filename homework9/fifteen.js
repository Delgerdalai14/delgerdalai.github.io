$(document).ready(function () {
  // initialize
  'use strict';
  init();

  function init() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName('div');

    // initialize each piece
    for (let i = 0; i < divs.length; i++) {
      var div = divs[i];

      // calculate x and y for this piece
      var x = (i % 4) * 100;
      var y = Math.floor(i / 4) * 100;

      // set basic style and background
      div.className = 'puzzlepiece';
      div.style.left = x + 'px';
      div.style.top = y + 'px';
      div.style.backgroundPosition = -x + 'px ' + -y + 'px';

      //set events
      div.setAttribute('id', `square_${x / 100}_${y / 100}`);
      div.onmouseover = onMouseOver;
      div.onmouseout = onMouseOut;
      div.onclick = onClick;
    }
  }

  // events
  $('#shufflebutton').on('click', onShuffle);

  function onClick() {
    move(this);
  }

  function onMouseOver() {
    if (isMoveable(this)) {
      this.classList.add('movablepiece');
    }
  }

  function onMouseOut() {
    if (isMoveable(this)) {
      this.classList.remove('movablepiece');
    }
  }

  function onShuffle() {
    for (let i = 0; i <= 256; i++) {
      const neighbors = getNeighbors();
      const randomNum = parseInt(Math.random() * neighbors.length);
      const square = document.getElementById(neighbors[randomNum]);
      move(square);
    }
  }

  function isMoveable(square) {
    if (getNeighbors().indexOf(square.getAttribute('id')) != -1) {
      return true;
    }
    return false;
  }

  let emptyX = 3;
  let emptyY = 3;

  function move(square) {
    const tempX = emptyX;
    const tempY = emptyY;
    if (isMoveable(square)) {
      emptyX = parseInt(square.style.left) / 100;
      emptyY = parseInt(square.style.top) / 100;
      square.style.top = 100 * tempY + 'px';
      square.style.left = 100 * tempX + 'px';
      square.setAttribute('id', `square_${tempX}_${tempY}`);
    }
  }

  function getNeighbors() {
    const arrSquares = [];
    const squares = [
      `square_${emptyX}_${emptyY - 1}`,
      `square_${emptyX}_${emptyY + 1}`,
      `square_${emptyX - 1}_${emptyY}`,
      `square_${emptyX + 1}_${emptyY}`,
    ];

    for (let i = 0; i < squares.length; i++) {
      if (document.getElementById(squares[i]) != null) {
        arrSquares.push(squares[i]);
      }
    }
    return arrSquares;
  }
});
