$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDeafult();

    
    let dog = $("input[name="dog"]:checked").val(true);
      if (dog === true) {
      alert("You love dogs!")
      }
  });
});