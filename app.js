const links = document.querySelectorAll(".links");

for (link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
}
