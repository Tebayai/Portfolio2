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
    photoshop:[
      { img: "img/Photoshop/wolf.png", title: "wolf", desc: "Photo composition d'un loup fait a l'aide de 3 image",},
      { img: "img/Photoshop/1.png", title: "Homme sur une voiture", desc: "Photo compostion homme sur une voiture" },
      { img: "img/Photoshop/2.png", title: "femme entre dans un apareil", desc: "Photo composition femme entrant dans une apareil" },
      { img: "img/Photoshop/3.jpg", title: "chanel posé sur la table", desc: "parfum posé sur une table" },
      { img: "img/Photoshop/4.png", title: "osco banniere", desc: "osco banniere" },
    ],
    illustrator:[
      { img: "img/illustrator/1.png", title: "Women", desc: "femme devant un mur" },
      { img: "img/illustrator/2.png", title: "Houlette", desc: "Logo Houlette" },
      { img: "img/illustrator/3.png", title: "Radioo voyage", desc: "Logo fictif de voyage" },
      { img: "img/illustrator/4.png", title: "composition", desc: "illustration fictive pour le festival de science fiction lyon" },
      { img: "img/illustrator/5.png", title: "illustration logo", desc: "Logo fictif" },
    ],
    indesign:[
      { img: "img/inDesign/1.png", title: "Page de garde magazine", desc: "Page de garde magazine" },
      { img: "img/inDesign/2.png", title: "Page de magazine", desc: "Page de magazine" },
      { img: "img/inDesign/3.png", title: "Page de magazine sur akira toriyama", desc: "Page de magazine sur akira toriyama" },
      { img: "img/inDesign/4.png", title: "Page de magazine sur des films", desc: "Page de magazine sur des films" },
      { img: "img/inDesign/5.png", title: "Page de garde magazine", desc: "Page de garde magazine" },
    ],
    web:[
      { img: "img/web/1.png", title: "NightCar", desc: "Click pour voir le site", link: "https://tebayai.github.io/carNight/main.html" },
      { img: "img/web/2.png", title: "wolf", desc: "description" },
      { img: "img/web/3.png", title: "wolf", desc: "description" },
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
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('mobile');
  });