function totalValue (num1, num2, num3, num4, num5) {
  return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)
}

$(document).ready(function() {
  $("#questions").submit(function(event) {

    let dog = $("input:radio[name='dog']:checked").val();

    let color = $("input:radio[name='color']:checked").val();

    let hike = $("input:radio[name='hike']:checked").val();

    let beverage = $("input:radio[name='beverage']:checked").val();

    let music = $("input:radio[name='music']:checked").val();

    let total = totalValue (dog, color, hike, beverage, music);

    if (total === 5) {
      $("#javascript").show();
    } else if (total > 5) {
      $("#ruby").show();
    } else if (total < 5) {
      $("#csharp").show();
    }
  event.preventDefault();

  });
});