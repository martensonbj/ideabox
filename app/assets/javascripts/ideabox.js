$(document).ready(function() {
  saveIdea();
});

function saveIdea(){
  $("#save-idea").on('click', function(){
    var ideaParams = {
      idea: {
        title: $("#idea-title").val(),
        body: $("#idea-body").val(),
        quality: $("#idea-quality").val(),
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
    $("#idea-description").html("")
  });
}


function renderIdea(idea){
  $('#new-ideas').append(
    "<div class='post'><h4>" +
    idea.title +
    "</h4><h6>" +
    idea.description +
    "</h6><h5>" +
    idea.quality +
    "</h5>" +
    "<button name='button-fetch' class='delete-post btn btn-default btn-xs'>Delete</button></div>"
  );
}
