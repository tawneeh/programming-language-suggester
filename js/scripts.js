function totalValue (num1, num2, num3, num4, num5) {
  return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)
}

function totalValueWithArgs() {
  // Arguments is a convience thing, apparently you can pass any number of
  // inputs to any method and access them through arguments. It's an array.
  let total = 0
  for (const value in arguments) {
    total += parseInt(value)
  }
  return total

  // The following line is the oneline version of the above using a functional
  // style. It's my fave style but takes some time to understand. I promise it's
  // the best :) This might not work like the other one, I didn't test this one.
  // return arguments.reduce((total, arg) => total + parseInt(arg), 0)
}

function getInputValue(input) {
  // In the following line I use string interpolation to insert the input into
  // the string that's executed by jQuery. The format is with backtics some
  // characters, and something ou want inserted (that is a string), like this:
  // `Abolish ${someValue}` where someValue = ICE :)
  const stringValue = $(`input:radio[name='${input}']:checked`).val()
  // May as well parse the Int here, why not!
  return parseInt(stringValue)
}

const inputs = ['dog', 'color', 'hike', 'beverage', 'music']

$(document).ready(function() {
  $("#questions").submit(function(event) {

    let total = 0
    inputs.forEach(function (input) { total += getInputValue(input) })

    // Another Functional example. Reduce is one of the trickier Functional
    // methods. It needs a function that returns a value and a starting value.
    // in this case, the 0 is the starting value, which is passed in during
    // the first call of the method as total. What's returned is used in the
    // next calling as total.
    // const total = inputs.reduce(function (total, arg) { return total + getInputValue(arg) }, 0)

    // I added the "="s to the > and < to cover those cases where total = 5 and
    // 8. It happened to me while testing, haha.
    if (total === 5) {
      $("#javascript").show();
    } else if (total >= 8) {
      $("#ruby").show();
    } else if (total <= 5) {
      $("#csharp").show();
    }
  event.preventDefault();
  });
});