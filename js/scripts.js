


$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    let dog = $("input:radio[name=dog]:checked").val();

    let color = $("input:radio[name=color]:checked").val();

    let hike = $("input:radio[name=beverage]:checked").val();

    let music = $("input:radio[name=music]:checked").val();

    let total = totalValue (dog, color, hike, beverage, music);

    $("#javascript").hide();
    $("#ruby").hide();
    $("#csharp").hide();

    if (total>= 5) {
      $('#javascript').show();
    }

  });
});