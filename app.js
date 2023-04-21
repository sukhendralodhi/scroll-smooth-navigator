// active menu switcher function start 

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

// active menu switcher function start 

// active menu switcher function start 
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
// active menu switcher function end


// header background change function start
const stickyNav = () => {
  const scrollBtn = document.getElementById("scroll-btn");
  const header = document.getElementById("header");
  header.classList.toggle("bg-gray-400", window.scrollY > 0);

  scrollBtn.classList.toggle("visible", window.scrollY > 100);
};
window.addEventListener("scroll", stickyNav);

// header background change function end

// scroll top
// scroll to top function
const scrollTop = () => {
  rootEle.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// show btn function
const showBtn = () => {
  const scrollTotal = rootEle.scrollHeight - rootEle.clientHeight;
  if (rootEle.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.remove("invisible");
  } else {
    scrollBtn.classList.add("invisible");
  }
};

const scrollBtn = document.getElementById("scroll-btn");
const rootEle = document.documentElement;
scrollBtn.addEventListener("click", scrollTop);
document.addEventListener("scroll", showBtn);
