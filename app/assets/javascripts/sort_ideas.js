$(document).ajaxSuccess(function(){
  var qualities = {"genius": 2, "plausible" : 1, "swill" : 0}
  var $ideas = $('.item')

  function sortIdeas(){
    $('#sort-ideas').on('click', function(){
      $ideas.sort(function (a, b) {
        var qualityName = $idea.find('.quality').text().toLowerCase();
        qualities.qualityName
        return a > b
      });
      console.log($ideas)
    });
  }
})
