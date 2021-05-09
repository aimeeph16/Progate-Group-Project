const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");
  const logo2 = document.querySelector(".logo2 img");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });

  //Moving card animation
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  //Animate in
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    logo2.style.transform = "translateZ(100px) rotateZ(-25deg)";
  });

  //Animate out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    logo2.style.transform = "translateZ(0px) rotateZ(0deg)";
  });
};

navSlide();
