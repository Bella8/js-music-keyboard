var note = function(select){
  var audio = $("#" + select + "Audio")[0];
  audio.load();
  audio.play();
};

$(document).ready( function() {
  $('.note').on('click', function() {
    var select = $(this).html();
    note(select);
  });

  $('.note').on('keydown', function(event) {
    var select = event.key;
    note(select);
  });
});
