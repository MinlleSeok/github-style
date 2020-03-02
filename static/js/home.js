const home = document.querySelector("body");

const Modal = document.createElement("div");
Modal.style.position = "fixed";
Modal.style.top = "0px";
Modal.style.zIndex = "9999";
Modal.style.width = "100vw";
Modal.style.height = "100vh";
Modal.style.backgroundColor = "black";
Modal.style.display = "flex";
Modal.style.flexDirection = "column";
Modal.style.justifyContent = "center";
Modal.style.alignItems = "center";

const mj = document.createElement("p");
mj.textContent = "MJ - Seok";
mj.style.color = "white";
mj.style.fontSize = "20px";

const bar = document.createElement("div");
bar.style.width = "100vw";
bar.style.height = "3vh";
bar.style.backgroundColor = "white";

Modal.appendChild(mj);
Modal.appendChild(bar);

home.appendChild(Modal);

mj.animate(
  [
    // keyframes
    { transform: "rotate(0)" },
    { transform: "rotate(3turn)" },
    { transform: "rotate(1turn)" }
  ],
  {
    // timing options
    duration: 1000,
    // iterations: Infinity
  }
);

bar.animate(
  [
    // keyframes
    { transform: "translateX(-100vw)" },
    { transform: "translateX(0px)" }
  ],
  {
    // timing options
    duration: 1800
    // iterations: Infinity
  }
);

setTimeout(function() {
  home.removeChild(Modal);
}, 2000);
