$(document).ajaxSuccess(function(){
  var $ideas = $('.item');

  $('#search-ideas').on('keyup', function() {
    var currentInput = this.value.toLowerCase();

    $ideas.each(function (index, idea) {
      var $idea = $(idea);
      var $ideaContent = $idea.find('.content').text().toLowerCase();

      if ($ideaContent.indexOf(currentInput) >= 0) {
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });

});
