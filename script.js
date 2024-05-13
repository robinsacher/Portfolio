document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });

  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      const targetElement = document.querySelector(href);

      links.forEach((link) => {
        link.classList.remove("active");
      });

      e.target.classList.add("active");

      const initialTop = window.pageYOffset;

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const finalTop = window.pageYOffset;

      window.scrollTo({
        top: initialTop,
        behavior: "smooth",
      });

      setTimeout(() => {
        window.scrollTo({
          top: finalTop,
          behavior: "smooth",
        });
      }, 10);
    });
  });
});
