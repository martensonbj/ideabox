$(document).ready(function() {
  saveIdea();
  deleteIdea();
});

var bodyText = function getIdeaBody(){
  var input = $("#idea-body").val()
  var maxLength = 3;
  var words = input.split(' ');
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(' ');
  };
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
    "<div class='item'> <i class='large idea mi ddle aligned icon'></i> <div class='content' data-id='" +
    idea.id +
    "'> <h4 class='title'> " +
    idea.title +
    "</h4><div class='body'> " +
     idea.body +
     " </div><div class='quality'> " +
     idea.quality +
     " </div><div name='button-delete' class='delete-idea ui button' tabindex='0'>Delete</div></div></div>"
  );
}

function deleteIdea() {
  $('#ideas-list').delegate('.delete-idea', 'click', function(){
    var $idea = $(this).closest('.content')
    $.ajax({
      type: "DELETE",
      url: "api/v1/ideas/" +
      $idea.attr("data-id") + ".json",
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
