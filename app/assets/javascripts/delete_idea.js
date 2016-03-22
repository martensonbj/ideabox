$(document).ready(function() {
  deleteIdea();
});

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
