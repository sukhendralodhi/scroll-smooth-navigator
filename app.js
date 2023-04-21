const links = document.querySelectorAll(".links");

for (linkEle of links) {
  linkEle.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
}

// active menu switcher
const navMenu = document.querySelector("nav");
const activeMenu = (e) => {
  const navList = e.target;
  if (navList.classList.contains("links")) {
    navMenu
      .querySelector(".text-orange-600")
      .classList.remove("text-orange-600");
    navList.classList.add("text-orange-600");
  }
};

navMenu.addEventListener("click", activeMenu);

const stickyNav = () => {
  const scrollBtn = document.getElementById('scroll-btn')
  const header = document.getElementById("header");
  header.classList.toggle("bg-gray-400", window.scrollY > 0);


  scrollBtn.classList.toggle("visible", window.scrollY > 100);
};
window.addEventListener("scroll", stickyNav);


