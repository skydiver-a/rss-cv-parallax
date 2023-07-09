const field = document.querySelector('#field'),
      sides = document.querySelector('#sides'),
      bottom = document.querySelector('#bottom');

window.addEventListener('scroll', () => {
  const value = window.scrollY;
  field.style.top = value*0.5 + 'px';
  sides.style.top = value*0.35 + 'px';
  bottom.style.top = value*0.15 + 'px';
});