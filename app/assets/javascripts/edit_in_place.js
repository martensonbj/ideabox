$(document).ready(function(){
  $('.body').on("mouseover", function(){
    $(this).css('color', 'blue')
  });
})


function sendContent(){
  $('.body').on('keydown', 'something', function(e) {
      if(e.keyCode == 13)
      console.log("pressed enter")
      {
          e.preventDefault();
      }
  });
}
