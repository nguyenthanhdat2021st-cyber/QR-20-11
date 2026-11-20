// Hiệu ứng hạt sáng nhỏ xuất hiện nhẹ nhàng trên nền trang.
const sparkleLayer = document.querySelector(".sparkles");
for (let i = 0; i < 18; i++) {
  const dot = document.createElement("span");
  dot.textContent = "✦";
  dot.style.position = "absolute";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.color = "#ffffff";
  dot.style.fontSize = `${10 + Math.random() * 12}px`;
  dot.style.opacity = "0.7";
  dot.style.animation = `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite alternate`;
  sparkleLayer.appendChild(dot);
}
const style = document.createElement("style");
style.textContent = "@keyframes twinkle { from { opacity:.2; transform:scale(.7) } to { opacity:1; transform:scale(1.25) } }";
document.head.appendChild(style);
