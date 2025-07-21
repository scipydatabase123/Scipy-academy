const header = document.querySelector("header");
const navbar = document.querySelector(".nav-bar");
const dropdownul = document.querySelector(".services-list");
const activelink = document.querySelectorAll(".active-link");
const links = document.querySelectorAll(
  ".menu-list ul li a:not(.services-list li a)"
);
const top_nav = document.querySelectorAll(".about-home");
const quotebtn = document.querySelector(".quote-btn a");

let isHeaderSticky = false;

if (header && navbar && dropdownul && quotebtn && links.length > 0) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      if (!isHeaderSticky) {
        header.style.position = "fixed";
        header.style.top = "0px";
        quotebtn.style.border = "1px solid #0092ff";
        header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
        navbar.style.padding = "8px 0";
        header.style.backgroundColor = "#fff";
        quotebtn.style.color = "#0092ff";
        header.style.transition = "all 0.4s ease";
        header.style.animation = "fadeIn";
        links.forEach((link) => {
          link.style.color = "#1d2c38";
        });
        dropdownul.style.marginTop = "40px";
        isHeaderSticky = true;
      }
    } else if (window.innerWidth > 1024) {
      header.style.position = "absolute";
      header.style.top = "60px";
      quotebtn.style.border = "1px solid #fff";
      quotebtn.style.color = "#fff";
      header.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0.2)";
      navbar.style.padding = "28px 0 8px 0";
      header.style.backgroundColor = "transparent";
      navbar.style.backgroundColor = "transparent";
      links.forEach((link) => {
        link.style.color = "#fff";
      });
      dropdownul.style.marginTop = "20px";
      isHeaderSticky = false;
    } else {
      header.style.position = "absolute";
      header.style.top = "0";
      quotebtn.style.border = "1px solid #fff";
      header.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0.2)";
      navbar.style.padding = "28px 0 8px 0";
      header.style.backgroundColor = "transparent";
      navbar.style.backgroundColor = "transparent";
      links.forEach((link) => {
        link.style.color = "#fff";
      });
      dropdownul.style.marginTop = "20px";
      isHeaderSticky = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-list .active-link");
  const homecolor = document.querySelector(".home-color");

  if (menuLinks.length > 0 && homecolor) {
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        menuLinks.forEach(function (link) {
          link.classList.remove("active");
          homecolor.style.color = "#1d2c38";
        });
        link.classList.add("active");
        if (link.classList.contains("home-color")) {
          homecolor.style.color = "#0092FF";
        }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const openSidebarButton = document.querySelector(".sidemenu-btn");
  const sidebar = document.querySelector(".sidebar");
  const SidebarCloser = document.querySelector(".sidebar-closer");

  if (openSidebarButton && sidebar && SidebarCloser) {
    sidebar.style.left = "-250px";
    SidebarCloser.style.display = "none";

    openSidebarButton.addEventListener("click", function () {
      if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        SidebarCloser.style.display = "block";
      } else {
        sidebar.style.left = "-250px";
        SidebarCloser.style.display = "none";
      }
    });

    SidebarCloser.addEventListener("click", function () {
      sidebar.style.left = "-250px";
      SidebarCloser.style.display = "none";
    });
  }
});

const homeOpen = document.getElementById("home");
if (homeOpen) {
  homeOpen.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../index.html";
  });
}

const homeLogo = document.getElementById("logo-image");
if (homeLogo) {
  homeLogo.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}
