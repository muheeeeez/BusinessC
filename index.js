const navbar = document.querySelector(".fixed-top");

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-light");
  } else {
    navbar.classList.remove("bg-light");
    logo.classList.add("new-logo");
  }
};
// console.log("Olaleye Muiz");
