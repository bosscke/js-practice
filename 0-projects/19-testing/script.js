// Functions

let msg = "Let's get things done!!";
function updateMessage() {
  let el = document.getElementById("answer");
  el.textContent = msg;
}
updateMessage();

function getArea(width, height) {
  return width * height;
}

wallWidth = 3;
wallHeight = 5;
getArea(3, 5);
getArea(wallWidth, wallHeight);
