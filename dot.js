// 1 Get "dots"
// 2 Loop through children of "dots"
// 3 Add Event Listener in the loop to each chid
//5ff

(function() {
  //debugger;
  let selectedColor = "fuchsia";
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
    var palette = document.getElementById("palette");
    var daColors = ["red", "orange", "yellow", "lawngreen", "skyblue"];
    for (let i = 0; i < palette.children.length; i++) {
      var colorOptions = palette.children[i];
      colorOptions.style.backgroundColor = daColors[i];
      colorOptions.addEventListener("click", setColor);
    }
  }

  function setColor(e) {
    selectedColor = e.target.style.backgroundColor;
  }

  function changeColor(e) {
    e.target.style.backgroundColor = selectedColor;
  }

  function nextColor() {
    let letters = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      color += randomLetter;
    }
    return color;
  }
})();
