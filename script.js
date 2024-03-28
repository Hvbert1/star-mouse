let initialX = 0;
let initialY = 0;

function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function createStar(x, y) {
  let dot = document.createElement("div");
  dot.innerHTML = '<span class="material-symbols-outlined">kid_star</span>';
  dot.className = "dot";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  document.body.appendChild(dot);
  setTimeout(() => document.body.removeChild(dot), 1500);
}

addEventListener("mousemove", (event) => {
  let currentX = event.clientX;
  let currentY = event.clientY;

  let distance = calculateDistance(initialX, initialY, currentX, currentY);

  if (distance > 50) {
    createStar(currentX, currentY);

    initialX = currentX;
    initialY = currentY;
  }
});
