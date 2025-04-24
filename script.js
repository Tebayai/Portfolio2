document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typing", {
      strings: ["Designer Web !", "Concepteur Ui/UX !","Infographiste !"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  });
  



  const menuLinks = document.querySelectorAll('.projects-menu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    });
  });