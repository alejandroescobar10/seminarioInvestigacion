window.addEventListener("DOMContentLoaded", () => {
  const setBackground = () => {
    const scrollY = window.scrollY;
    const body = document.body;

    if (scrollY < 600) {
      body.style.backgroundImage = "url('./images/fondo1.jpg')";
    } else if (scrollY < 1200) {
      body.style.backgroundImage = "url('./images/fondo2.jpg')";
    } else if (scrollY < 1800) {
      body.style.backgroundImage = "url('./images/fondo3.jpg')";
    } else {
      body.style.backgroundImage = "url('./images/fondo4.jpg')";
    }
  };

  setBackground();
  window.addEventListener("scroll", setBackground);
});
