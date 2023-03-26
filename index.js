var color = ["#ADD8E6", "#151B54", "#E3E4FA", "#FFDAB9"];

document.querySelector("#color1").addEventListener("mouseout", () => {
  document.querySelector("body").style.background = color[0];
});
document.querySelector("#color2").addEventListener("mouseout", () => {
  document.querySelector("body").style.background = color[1];
});
document.querySelector("#color3").addEventListener("mouseout", () => {
  document.querySelector("body").style.background = color[2];
});
document.querySelector("#color4").addEventListener("mouseout", () => {
  document.querySelector("body").style.background = color[3];
});
