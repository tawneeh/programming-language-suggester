$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDeafult();

    
    let dog = $("input[name="dog"]:checked").val(true);
      if (dog === true) {
        $('#javascript').show();
      } else if (dog === false) {
        $('#c-sharp').show();
      } else if (music === true) {
        $('#ruby').show();
      }
  });
});
