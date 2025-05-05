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
      { img: "img/Photoshop/1.png", title: "Test", desc: "description" },
      { img: "img/Photoshop/2.png", title: "img3", desc: "description" },
      { img: "img/Photoshop/3.png", title: "wolf", desc: "description" },
      { img: "img/Photoshop/4.png", title: "test3", desc: "description" },
    ],
    illustrator:[
      { img: "img/illustrator/1.png", title: "Women", desc: "femme devant un mur" },
      { img: "img/illustrator/2.png", title: "Houlette", desc: "Logo Houlette" },
      { img: "img/illustrator/3.png", title: "Radioo voyage", desc: "Logo fictif de voyage" },
      { img: "img/illustrator/4.png", title: "wolf", desc: "description" },
      { img: "img/illustrator/5.png", title: "wolf", desc: "description" },
    ],
    indesign:[
      { img: "img/inDesign/1.png", title: "wolf", desc: "description" },
      { img: "img/inDesign/2.png", title: "wolf", desc: "description" },
      { img: "img/inDesign/3.png", title: "wolf", desc: "description" },
      { img: "img/inDesign/4.png", title: "wolf", desc: "description" },
      { img: "img/inDesign/5.png", title: "wolf", desc: "description" },
    ],
    web:[
      { img: "img/web/1.png", title: "wolf", desc: "description" },
      { img: "img/web/2.png", title: "wolf", desc: "description" },
      { img: "img/web/3.png", title: "wolf", desc: "description" },
      { img: "img/web/4.png", title: "wolf", desc: "description" },
      { img: "img/web/5.png", title: "wolf", desc: "description" },
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
        <img src="${project.img}" alt="${project.title}" loading="lazy" />
        <p>${project.desc}</p>
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