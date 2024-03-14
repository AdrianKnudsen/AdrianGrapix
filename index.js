// Hero parallax effect

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const heroText = document.querySelector(".heroText");

  const scale = Math.max(0.5, 1 - scrollPosition / 1000);
  const translateY = Math.min(100, scrollPosition * 0.5);

  heroText.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
});

// Gallery spin function

function updateRotation() {
  const screenWidth = window.innerWidth;
  const maxWidth = 800;
  let rotationDegree = Math.max(
    0,
    Math.min(1, (screenWidth - maxWidth) / maxWidth)
  );

  const rotationX = 45 * rotationDegree;
  const rotationZ = 45 * rotationDegree;

  const imageGrid = document.querySelector(".image-grid");
  imageGrid.style.transform = `rotateX(${rotationX}deg) rotateZ(${rotationZ}deg)`;
}

window.addEventListener("resize", updateRotation);

updateRotation();
