isStarted = false;

function start() {
  isStarted = true;
  $('.boundary').removeClass('youlose');
  $('#status').text('Game started. :|');
}

function end() {
  if (!isStarted) return;

  isStarted = false;
  $('#status').text('You win! :]');
}

function lose() {
  if (!isStarted) return;

  isStarted = false;
  $('.boundary').addClass('youlose');
  $('#status').text('Sorry, you lost. :[');
}

$(document).ready(function () {
  $('#maze .boundary').mouseover(lose);
  $('#end').mouseover(end);
  $('#start').click(start);
  $('#maze').mouseleave(lose);
});
