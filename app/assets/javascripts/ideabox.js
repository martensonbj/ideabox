$(document).ready(function() {
  saveIdea();
  deleteIdea();
  increaseQuality();
  // decreaseQuality();
});

var bodyText = function getIdeaBody(){
  var input = $("#idea-body").val()
  var maxLength = 3;
  var words = input.split(' ');
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(' ');
  } else {
    return words.join(' ');
  }
}

function saveIdea(){
  $("#save-idea").on('click', function(){
    console.log(bodyText)
    var ideaParams = {
      idea: {
        title: $("#idea-title").val(),
        body: bodyText,
        quality: $("#idea-quality").val()
      }
    }

    $.ajax({
      type: "POST",
      url: "api/v1/ideas",
      data: ideaParams,
      success: function(newIdea){
        renderIdea(newIdea)
      },
      error: function(xhr) {
        console.log("Something F'ed Up")
        console.log(xhr.responseText)
      }
    });

    $("#idea-title").val("")
    $("#idea-body").val("")
    $("#idea-quality").val("")
  });
}

function renderIdea(idea){
  $('#ideas-list').prepend(
    "<div class='item'><div class='content' data-id='" +
    idea.id +
    "'> <h4 class='title'><i class='large idea middle aligned icon'></i> " +
    idea.title +
    "</h4><div class='body idea-element'> " +
     idea.body +
     " </div><div class='quality idea-element'><span class='quality-span'> " +
     idea.quality +
     " </span><span class='thumbs'><i class='large thumbs down icon decrease-quality'></i><i class='large thumbs up icon increase-quality'></i></span></div><div name='button-delete' class='delete-idea ui button' tabindex='0'>Delete</div></div></div>"
  );
}

function deleteIdea() {
  $('#ideas-list').delegate('.delete-idea', 'click', function(){
    var $idea = $(this).closest('.content')
    $.ajax({
      type: "DELETE",
      url: "api/v1/ideas/" + $idea.attr("data-id") + ".json",
      success: function() {
        $idea.parent().remove()
      },
      error: function(xhr){
        console.log("Delete did not work")
        console.log(xhr.responseText)
      }
    });
  });
}

function setIncreasedQuality(quality){
  if (quality === 2){
    return "plausible"
  } else  {
    return "genius"
  }
}

function increaseQuality(){
  $('.increase-quality').on('click', function(){
    var $idea = $(this).closest('.content')
    var $currentQuality = $(this).closest('.content span').html();
    var newQuality = setIncreasedQuality($currentQuality)
    console.log("quality: " + $currentQuality)
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
        $(this).closest('.content span').html(newQuality)
        console.log("Updated Quality to: " + newQuality)
      },
      error: function(xhr){
        console.log("Error in thumbs up")
        console.log(xhr.responseText)
      }
    })
  });
}
