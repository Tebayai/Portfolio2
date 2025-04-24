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


  const tabs = document.querySelectorAll('.projects-menu a');
  const projectLists = document.querySelectorAll('.project-list');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();

      // retire la classe 'active' de tous les éléments
      tabs.forEach(t => t.classList.remove('active'));
      projectLists.forEach(list => list.classList.remove('active'));

      // ajoute 'active' à l'élément cliqué
      tab.classList.add('active');

      // affiche la bonne section
      const targetId = tab.getAttribute('data-target');
      const targetSection = document.querySelector(`#${targetId}`);

      targetSection.classList.add('active');
    });
  });