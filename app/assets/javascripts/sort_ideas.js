$(document).ajaxSuccess(function(){
  var qualities = {"genius": 2, "plausible" : 1, "swill" : 0}
  var $ideas = $('.item')
  console.log('ideas at first:' + $ideas)

  function sortIdeas(){
    $('#sort-ideas').on('click', function(){
      console.log("in sort ideas function")
      orderByQuality();
    });
  }

  function orderByQuality() {
    var orderedIdeas = $ideas.sort(function (a, b) {
      var qualityName = $idea.find('.quality').text().toLowerCase();
      qualities.qualityName
      return a > b
      console.log('ideas after: ' + $ideas)
    });
    resetIdeas(orderedIdeas);
  }

  function resetIdeas(orderedIdeas) {
    $('.idea').remove();
    orderedIdeas.each(ideas, function(index, idea){
      $('#ideas-list').append(idea);
    });
  }

});
