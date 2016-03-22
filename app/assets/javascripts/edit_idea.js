$(document).ready(function(){
  toggleEditModal()
});

function toggleEditModal(){
  $('.content').delegate('edit-idea-modal', 'click', function(){
    idea = $(this).closest('.content')
    console.log(idea)
    $('.modal').show()
    editIdea(idea)
  });

  $('.close').on('click', function(){
    $('.modal').hide()
  });
}

var editBodyText = function getIdeaBody(){
  var input = $("#edit-idea-body").val()
  var maxLength = 3;
  var words = input.split(' ');
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(' ');
  } else {
    return words.join(' ');
  }
}

function editIdea(idea){
  $("#edit-idea").on('click', function(){
    var $idea = idea
    var ideaParams = {
      idea: {
        title: $("edit-idea-title").val(),
        body: editBodyText,
      }
    }

    $.ajax({
      type: "PUT",
      url: "api/v1/ideas/" + $idea.attr("data-id") + ".json",
      data: ideaParams,
      success: function(){
        console.log("IDEA UPDATED")
      },
      error: function(xhr){
        console.log("Error in edit", xhr.responseText)
      }
    });

    $("#edit-sidea-title").val("")
    $("#edit-sidea-body").val("")
    $("#edit-sidea-quality").val("")
  });
}
