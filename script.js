document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typing", {
      strings: ["Designer Web !", "Concepteur Ui/UX !","Infographiste !"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
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


  // affichage des images via js

  const projects = {
    photoshop: [
      { img: "img/Photoshop/wolf.png", title: "Loup dans la nuit", desc: "Composition photo réaliste d’un loup réalisée à partir de trois images." },
      { img: "img/Photoshop/1.png", title: "Homme sur une voiture", desc: "Montage photo mettant en scène un homme debout sur une voiture." },
      { img: "img/Photoshop/2.png", title: "Fusion homme-machine", desc: "Photomontage d’une femme semblant entrer dans un appareil." },
      { img: "img/Photoshop/3.jpg", title: "Parfum Chanel", desc: "Mise en scène d’un flacon de parfum Chanel posé élégamment sur une table." },
      { img: "img/Photoshop/4.png", title: "Bannière Osco", desc: "Création graphique d’une bannière promotionnelle pour la marque Osco." },
    ],
    illustrator: [
      { img: "img/illustrator/1.png", title: "Femme au mur", desc: "Illustration stylisée d’une femme devant un mur texturé." },
      { img: "img/illustrator/2.png", title: "Logo Houlette", desc: "Création d’un logo pour une entreprise fictive nommée Houlette." },
      { img: "img/illustrator/3.png", title: "Radio Voyage", desc: "Logo fictif pour une radio thématique sur le voyage." },
      { img: "img/illustrator/4.png", title: "Festival de science-fiction", desc: "Affiche illustrée pour un festival de science-fiction à Lyon." },
      { img: "img/illustrator/5.png", title: "Logo abstrait", desc: "Création d’un logo conceptuel pour un projet fictif." },
    ],
    indesign: [
      { img: "img/inDesign/1.png", title: "Couverture de magazine", desc: "Conception d’une page de couverture pour un magazine culturel." },
      { img: "img/inDesign/2.png", title: "Double page magazine", desc: "Mise en page d’un article illustré dans un magazine." },
      { img: "img/inDesign/3.png", title: "Hommage à Akira Toriyama", desc: "Double page magazine dédiée à l’univers d’Akira Toriyama." },
      { img: "img/inDesign/4.png", title: "Sélection cinéma", desc: "Page magazine présentant une sélection de films à découvrir." },
      { img: "img/inDesign/5.png", title: "Couverture alternative", desc: "Proposition de couverture pour un magazine." },
    ],
    figma: [
      { img: "img/figma/1.png", title: "Prototype d'application", desc: "Conception d’une landing page rafraîchissante pour une marque de cidre.", link:"https://www.figma.com/design/Az1xzRYN7JdwbnnIyHvzTK/WebsitePro?node-id=0-1&t=m6xIPQ8Ag9KlyW6o-1"},
      { img: "img/figma/2.png", title: "Prototype d'application 2", desc: "Maquette d'un site sur les voitures japonaise.", link:"https://www.figma.com/design/Az1xzRYN7JdwbnnIyHvzTK/WebsitePro?node-id=0-1&t=m6xIPQ8Ag9KlyW6o-1"},
      { img: "img/figma/3.png", title: "Prototype d'application 3", desc: "Maquette sur un site web de NFT.", link:"https://www.figma.com/design/Az1xzRYN7JdwbnnIyHvzTK/WebsitePro?node-id=0-1&t=m6xIPQ8Ag9KlyW6o-1"},
      { img: "img/figma/4.png", title: "Prototype d'application 4", desc: "Maquette d’un site de vente de livres de science-fiction avec une ambiance spatiale.", link:"https://www.figma.com/design/Az1xzRYN7JdwbnnIyHvzTK/WebsitePro?node-id=0-1&t=m6xIPQ8Ag9KlyW6o-1"},
      { img: "img/figma/5.png", title: "Prototype d'application 5", desc: "Maquette site web interactif sur la biodiversité marine.", link:"https://www.figma.com/design/Az1xzRYN7JdwbnnIyHvzTK/WebsitePro?node-id=0-1&t=m6xIPQ8Ag9KlyW6o-1"},
    ],
    web: [
      { img: "img/web/1.png", title: "NightCar", desc: "Site vitrine interactif pour une marque automobile fictive. Cliquez pour le visiter.", link: "https://tebayai.github.io/carNight/main.html" },
      { img: "img/web/2.png", title: "Site expérimental 1", desc: "Prototype de site web avec animations CSS et structure responsive." },
      { img: "img/web/3.png", title: "Site expérimental 2", desc: "Exercice de design web basé sur une maquette moderne et épurée." },
    ]
  };

  // initialise le contenu de la section projets
  const projectContainer = document.querySelector('.projects-content');
  const menuLinks = document.querySelectorAll('.projects-menu a');

  function renderProjects(category) {
    const items = projects[category] || [];
    projectContainer.innerHTML = `
      <div class="project-list active" id="${category}">
        ${items.map(project => `
          <div class="project-item">
            ${project.link ? `
              <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                <img src="${project.img}" alt="${project.title}" loading="lazy" />
                <p>${project.desc}</p>
              </a>
            ` : `
              <img src="${project.img}" alt="${project.title}" loading="lazy" />
              <p>${project.desc}</p>
            `}
          </div>
        `).join('')}
      </div>
    `;
}

// initialiser avec photoshop
renderProjects('photoshop');

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      menuLinks.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
      renderProjects(link.dataset.target); // actulise le contenu lors du clic
    });
  });


  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  const links = document.querySelectorAll('.menu a');

  burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
  });

  // Ferme le menu quand on clique sur un lien
  links.forEach(link => {
      link.addEventListener('click', () => {
          burger.classList.remove('active');
          menu.classList.remove('active');
      });
  });