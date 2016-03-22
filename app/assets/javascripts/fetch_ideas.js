$(document).ready(function() {
  fetchIdeas();
});

function fetchIdeas(){
  $.ajax({
    type: "GET",
    url: "api/v1/ideas",
    success: function(ideas) {
      $.each(ideas, function(index, idea){
        renderIdea(idea)
        console.log("Idea" + idea)
      });
    }, error: function(xhr) {
      console.log("STUCK IN FETCH", xhr);
    }
  });
};
