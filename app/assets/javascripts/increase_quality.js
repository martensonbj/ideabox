$(document).ajaxSuccess(function(){
  increaseQuality();
});

function setNewQuality(status) {
  if (status === "swill") {
    return "plausible"
  } else {
    return "genius"
  }
}

function increaseQuality(){
  $('.increase-quality').on('click', function() {
    var $idea = $(this).closest('.content')
    var currentQuality = $idea.find('.quality').text().toLowerCase()
    currentQuality = currentQuality.replace(/\s+/g, '');
    var newQuality = setNewQuality(currentQuality)
    console.log("current " + currentQuality + " new: " + newQuality)
    var ideaParams = {
      idea: {
        quality: newQuality
      }
    }

    $.ajax({
      type: "PUT",
      url: "api/v1/ideas/" + $idea.attr("data-id") + ".json",
      data: ideaParams,
      success: function(){
        quality = newQuality[0].toUpperCase() + newQuality.slice(1)
        $idea.find('.quality').find('p').html(quality)
        console.log("Updated Quality to: " + newQuality)
      },
      error: function(xhr){
        console.log("Error in thumbs up")
        console.log(xhr.responseText)
      }
    })
  });
}
