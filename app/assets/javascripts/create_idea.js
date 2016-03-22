$(document).ready(function() {
  saveIdea();
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
  console.log("in render idea:" + idea)
  var cappedQuality = idea.quality[0].toUpperCase() + idea.quality.slice(1)
  $('#ideas-list').prepend(
    "<div class='item'><div class='content' data-id='" +
    idea.id +
    "'> <h4 class='title'><i class='large idea middle aligned icon'></i> " +
    idea.title +
    "</h4><div class='body idea-element'> " +
     idea.body +
     " </div><div class='quality idea-element'><p> " +
     cappedQuality +
     " </p><span><i class='large thumbs down icon decrease-quality'></i><i class='large thumbs up icon increase-quality'></i></span></div><div name='button-delete' class='delete-idea ui button' tabindex='0'>Delete</div></div></div>"
  );
}