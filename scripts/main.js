// toggle & responsif navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navlists = document.querySelector('nav');
  
    burger.addEventListener('click', () => {
      navlists.classList.toggle('nav-active');
      burger.classList.toggle('toggle-burger');
    });
  };
  
  navSlide();