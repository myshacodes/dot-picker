// 1 Get "dots"
// 2 Loop through children of "dots"
// 3 Add Event Listener in the loop to each chid
//

(function() {
  let selectedColor = "#ff4abb";

  init();
  makeColorPalette();

  function init() {
    var dots = document.getElementById("dots");
    for (let i = 0; i < dots.children.length; i++) {
      var dotties = dots.children[i];
      dotties.addEventListener("click", changeColor);
    }
  }
  function makeColorPalette() {
    //1.Change color of the palette's children
    //2.Add an event listener
    //3.Save the color in a variable
    //4.
    let palette = document.getElementById("palette");
    let daColors = ["#ff4abb", "#ffaa00", "#deff00", "#00ff25", "#00e2ff"];
    for (let i = 0; i < palette.children.length; i++) {
      let box = palette.children[i];
      box.style.backgroundColor = daColors[i];
      box.addEventListener("click", setColor);
    }
  }
  function setColor(e) {
    selectedColor = e.target.style.backgroundColor;
  }

  function changeColor(e) {
    var dotColor = e.target.style.backgroundColor;
    if (dotColor == selectedColor) {
      e.target.style.backgroundColor = "#787a84";
    } else {
      e.target.style.backgroundColor = selectedColor;
    }
  }
})();
