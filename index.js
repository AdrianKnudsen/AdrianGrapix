document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const heroText = document.querySelector(".heroText");

  const scale = Math.max(0.5, 1 - scrollPosition / 1000);
  const translateY = Math.min(100, scrollPosition * 0.5);

  heroText.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
});
