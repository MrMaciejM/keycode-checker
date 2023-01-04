var input = document.querySelector("input");
var showKeyCode = document.querySelector(".inputDiv");
var keycodePara = document.querySelector(".keycode");
var keypressedPara = document.querySelector(".keypressed");

input.addEventListener("keypress", function (event) {
  var keycode = event.keyCode;
  var keyPressed = event.key;
  keycodePara.textContent = `Keycode: ${keycode}`;
  keypressedPara.textContent = `Key pressed: ${keyPressed}`;
});
