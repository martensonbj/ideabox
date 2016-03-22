$(document).ready(function() {
  increaseQuality();
  // decreaseQuality();
});

function setIncreasedQuality(quality){
  if (quality === "swill"){
    return "plausible"
  } else  {
    return "genius"
  }
}

function increaseQuality(){
  $('.increase-quality').on('click', function(){
    var $idea = $(this).closest('.content')
    var currentQuality = $(this).parent().parent().find('p').html().toLowerCase()
    console.log("currentQuality: " + currentQuality)
    var newQuality = setIncreasedQuality(currentQuality)
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
        $(this).parent().parent().find('p').html(newQuality)
        console.log("Updated Quality to: " + newQuality)
      },
      error: function(xhr){
        console.log("Error in thumbs up")
        console.log(xhr.responseText)
      }
    })
  });
}
