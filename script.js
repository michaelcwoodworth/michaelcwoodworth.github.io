document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.track');
  const left = carousel.querySelector('[data-left]');
  const right = carousel.querySelector('[data-right]');

  left.onclick = () => track.scrollBy({ left: -340, behavior: 'smooth' });
  right.onclick = () => track.scrollBy({ left: 340, behavior: 'smooth' });
});
