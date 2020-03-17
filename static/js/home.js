const home = document.querySelector("body");

if (!localStorage.getItem("matrix")) {
  const now = new Date().getTime();
  localStorage.setItem("matrix", now);
  showMatrix();
} else {
  const time = localStorage.getItem("matrix");
  const now = new Date().getTime();
  if (now - time > 10 * 60 * 1000) {
    localStorage.clear();
  }
}

// window.addEventListener('beforeunload', function (e) {
//   // the absence of a returnValue property on the event will guarantee the browser unload happens
//   delete e['returnValue'];
//   localStorage.clear();
// });

function showMatrix() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0px";
  home.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // setting up the letters
  let letters = [0, 1];

  // Setting up the columns
  const fontSize = 10,
    columns = canvas.width / fontSize;

  // Setting up the drops
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = "#0f0";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  const matrix = setInterval(draw, 33);

  const fadeOut = () => {
    const effect = setInterval(() => {
      if (!canvas.style.opacity) {
        canvas.style.opacity = 1;
      }
      if (canvas.style.opacity > 0) {
        canvas.style.opacity -= 0.1;
      } else {
        canvas.style.display = "none";
        clearInterval(effect);
      }
    }, 40);
  };

  setTimeout(() => {
    fadeOut();
    clearInterval(matrix);
  }, 5000);
}

// const Modal = document.createElement("div");
// Modal.style.position = "fixed";
// Modal.style.top = "0px";
// Modal.style.zIndex = "9999";
// Modal.style.width = "100vw";
// Modal.style.height = "100vh";
// Modal.style.backgroundColor = "black";
// Modal.style.display = "flex";
// Modal.style.flexDirection = "column";
// Modal.style.justifyContent = "center";
// Modal.style.alignItems = "center";

// const mj = document.createElement("p");
// mj.textContent = "MJ - Seok";
// mj.style.color = "white";
// mj.style.fontSize = "20px";

// const bar = document.createElement("div");
// bar.style.width = "100vw";
// bar.style.height = "3vh";
// bar.style.backgroundColor = "white";

// Modal.appendChild(mj);
// Modal.appendChild(bar);

// home.appendChild(Modal);

// mj.animate(
//   [
//     // keyframes
//     { transform: "rotate(0)" },
//     { transform: "rotate(3turn)" },
//     { transform: "rotate(1turn)" }
//   ],
//   {
//     // timing options
//     duration: 1000,
//     // iterations: Infinity
//   }
// );

// bar.animate(
//   [
//     // keyframes
//     { transform: "translateX(-100vw)" },
//     { transform: "translateX(0px)" }
//   ],
//   {
//     // timing options
//     duration: 1800
//     // iterations: Infinity
//   }
// );

// setTimeout(function() {
//   home.removeChild(Modal);
// }, 2000);
