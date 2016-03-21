$(document).ready(function() {
  saveIdea();
  deleteIdea();
});

function saveIdea(){
  $("#save-idea").on('click', function(){
    var ideaParams = {
      idea: {
        title: $("#idea-title").val(),
        body: $("#idea-body").val(),
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

    $("#idea-title").html("")
    $("#idea-body").html("")
    $("#idea-quality").html("")
  });
}

function renderIdea(idea){
  $('#ideas-list').prepend(
    "<div class='item' data-id='" +
    idea.id + "'> <i class='large idea middle aligned icon'></i> <div class='content'> <h4 class='title'> " +
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
    console.log('idea is:' + $idea)
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
