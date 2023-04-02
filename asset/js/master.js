function _slide(self) {
  x = self.children;
  x = x[0].querySelector("img").getAttribute("src");
  document.querySelector(".window>img").setAttribute("src", x);
}
function _slide1(self) {
  x = self.children;
  x = x[0].querySelector("img").getAttribute("src");
  document.querySelector(".window-1>img").setAttribute("src", x);
}

let flag = 1;
let m = document.getElementById("mobile");
function _dropMenu(self) {
  _span = self.children;

  // ***************

  if (flag % 2) {
    _span[1].style.opacity = "0";
    _span[0].style.transform = "rotate(32deg)";
    _span[2].style.transform = "rotate(-32deg)";
    document.getElementById("mobile").style.transform = "translateX(0%)";
  } else {
    _span[1].style.opacity = "1";
    _span[0].style.transform = "rotate(0deg)";
    _span[2].style.transform = "rotate(0deg)";
    document.getElementById("mobile").style.transform = "translateX(120%)";
  }
  flag++;
}
