const field = document.querySelector('#field'),
      cloud = document.querySelector('#cloud'),
      sides = document.querySelector('#sides'),
      bottom = document.querySelector('#bottom');
const accordionBtns = document.querySelectorAll(".accordion");

window.addEventListener('scroll', () => {
  const value = window.scrollY;

  cloud.style.left = value*0.5 + 'px';
  field.style.top = value*0.5 + 'px';
  sides.style.top = value*0.35 + 'px';
  bottom.style.top = value*0.15 + 'px';
});

accordionBtns.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("is_open");

    let content = accordion.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});