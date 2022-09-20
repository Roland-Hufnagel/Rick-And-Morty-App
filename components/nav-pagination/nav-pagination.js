export default function createPagination() {
  const span = document.createElement('span');
  span.classList.add('navigation__pagination');
  span.setAttribute('data-js', 'pagination');
  span.textContent = '1 / A';
  return span;
}
