var calc;

function calculation() {
  var a = Number(document.querySelector('[name="number1"]').value);
  var b = Number(document.querySelector('[name="number2"]').value);
  var result;
  switch (calc) {
    case "sum":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "mult":
      result = a * b;
      break;
    case "div":
      if (b == 0) {
        result = "error";
      } else {
        result = a / b;
        break;
      }
  }
  document.getElementById("result").innerHTML = result;
}
