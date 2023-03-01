document.getElementById("cInput").oninput = function() {convertKToF()};
document.getElementById("fInput").oninput = function() {convertFToK()};

function convertKToF() {
  var k = document.querySelector("#kInput").value;
  var f = 1.8 * (k - 273) + 32;

  k = parseInt(k);
  f = parseInt(f);

  document.querySelector("#result").innerHTML = ("Result: ") + f + (" \u2109");
}

document.querySelector("#submit").onclick = convertKToF;

function convertFToK() {
  var f = document.querySelector("#fInput").value;
  var k = (f + 459.67) * 5 / 9;

  k = parseInt(k);
  f = parseInt(f);

  document.querySelector("#result").innerHTML = ("Result: ") + k + (" \u2103");
}

document.querySelector("#submit").onclick = convertFToK;
