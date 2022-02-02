$(document).ready(function () {
  $('#dic-form').submit(search);
});

function search(e) {
  e.preventDefault();
  const query = $('#search-input').val();
  $('#result').empty();
  $.get('/search?word=' + query, function (data) {
	  var count=1;
    $.each(data, function (index, item) {
      $('#result').append(`
        <div>
          ${count++}) <strong>${item.word} </strong><em>(${item.wordtype})</em> :: ${item.definition}
        </div>`);
    });
  }).fail(function (xhr) {
    if (xhr.status == 404) {
      $('#result').html('<div class="alert alert-info">Word not found</div>');
    }
  });
}