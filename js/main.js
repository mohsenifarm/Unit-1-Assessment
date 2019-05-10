var result = 0;

var h1El = document.querySelector("h1");
var plus = document.querySelector("#one");
var neg = document.querySelector("#two");
var inp = document.querySelector("input");

plus.addEventListener("click", goPlus);
neg.addEventListener("click", goNeg);

function goPlus() {
  var x = inp.value;
  result = result + parseInt(x);
  if (result >= 0) {
    h1El.style.color = "black";
    h1El.innerHTML = result;
  }
  if (result < 0) {
    h1El.style.color = "red";
    h1El.innerHTML = result;
  }
  inp.value = "";
  if (!result) {
    setTimeout(function() {
      location.reload();
    }, 700);
  }
}
function goNeg() {
  var x = inp.value;
  result = result - parseInt(x);
  if (result < 0) {
    h1El.style.color = "red";
    h1El.innerHTML = result;
  }

  if (result >= 0) {
    h1El.style.color = "black";
    h1El.innerHTML = result;
  }
  inp.value = "";
  if (!result) {
    setTimeout(function() {
      location.reload();
    }, 700);
  }
}
