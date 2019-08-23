// 1 Get "dots"
// 2 Loop through children of "dots"
// 3 Add Event Listener in the loop to each chid
//

var dots = document.getElementById("dots");
for (let i = 0; i <= dots.children.length; i++) {
  var dotties = dots.children[i];
  dotties.addEventListener("click", changeColor);
}
function changeColor(e) {
  var dotColor = e.target.style.backgroundColor;
  if (dotColor == "fuchsia") {
    e.target.style.backgroundColor = "lightgrey";
  } else {
    e.target.style.backgroundColor = "fuchsia";
  }
}
