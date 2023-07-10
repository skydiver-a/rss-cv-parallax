const field = document.querySelector('#field'),
      cloud = document.querySelector('#cloud'),
      sides = document.querySelector('#sides'),
      bottom = document.querySelector('#bottom');

window.addEventListener('scroll', () => {
  const value = window.scrollY;

  cloud.style.left = value*0.5 + 'px';
  field.style.top = value*0.5 + 'px';
  sides.style.top = value*0.35 + 'px';
  bottom.style.top = value*0.15 + 'px';
});