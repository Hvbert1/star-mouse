addEventListener("mousemove", (event) => {
  let dot = document.createElement("div");
  dot.className = "dot";
  let x = event.clientX;
  let y = event.clientY;
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  document.body.appendChild(dot);
  setTimeout(() => document.body.removeChild(dot), 1500);
});
