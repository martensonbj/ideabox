$(document).ajaxSuccess(function(){
  toggleEditModal()
});

function toggleEditModal(){
  $('.edit-idea-modal').on('click', function(){
    idea = $(this).closest('.content')
    console.log(idea)
    $('.modal').show()

    var existingTitle = idea.find('.title').text()
    var existingBody = idea.find('.body').text()

    $('#edit-idea-body').val(existingBody)
    $('#edit-idea-title').val(existingTitle)
    editIdea(idea)
  });
}

function closeModal(){
  $('.close').on('click', function(){
    $('.modal').hide()
  });
}

var editBodyText = function getIdeaBody(){
  var input = $("#edit-idea-body").val()
  var maxLength = 100;
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
    var newTitle = $("#edit-idea-title").val()
    var replaceTitle = "<i class='large idea middle aligned icon'></i> " + newTitle
    var ideaParams = {
      idea: {
        title: newTitle,
        body: editBodyText
      }
    }
    sendEditAjax(idea, ideaParams, replaceTitle);
  });
}

function sendEditAjax(idea, ideaParams, replaceTitle){
  $.ajax({
    type: "PUT",
    url: "api/v1/ideas/" + idea.attr("data-id") + ".json",
    data: ideaParams,
    success: function(response){
      debugger
      $('.modal').hide()
      idea.find('h4').html(replaceTitle)
      idea.find('.body').text(editBodyText)
    },
    error: function(xhr){
      console.log("Error in edit", xhr.responseText)
    }
  });
}
