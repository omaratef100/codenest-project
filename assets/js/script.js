 const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


/* Toggle dark mode */

    const toggleBtn = document.getElementById('modeToggle');
  const icon = toggleBtn.querySelector('i');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('bx-brightness-half');
    icon.classList.add('bx-sun');
  }
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (isDark) {
      icon.classList.remove('bx-brightness-half');
      icon.classList.add('bx-sun');
    } else {
      icon.classList.remove('bx-sun');
      icon.classList.add('bx-brightness-half');
    }
  });

/* * Toggle profile menu on click */
    const profileMenu = document.getElementById('profileMenu');
  const menuToggle = document.querySelector('.menu-toggle');

  function toggleMenu() {
    profileMenu.classList.toggle('open');
  }

  document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      profileMenu.classList.remove('open');
    }
  });


  /*  * Highlight active link in the navigation menu*/
    document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.main-nav ul li a');

    links.forEach(link => {
      link.addEventListener('click', function () {
        links.forEach(el => el.classList.remove('active'));

        this.classList.add('active');
      });
    });
  });


/*****اضافة تاثير التحميل *******/

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    preloader.classList.add("fade-out");      
    setTimeout(() => {
      preloader.remove();                    
      mainContent.style.display = "block";   
    }, 400);                                 
  }, 3000);                          
});
