export default function createButton(name, callback) {
  const button = document.createElement('button');
  button.classList.add('button');
  if (name === 'prev') {
    button.classList.add('button--prev');
    button.setAttribute('data-js','button-prev')
    button.textContent = 'Prev';
    button.addEventListener('click', callback);
  }
  if (name === 'next') {
    button.classList.add('button--next');
    button.textContent = 'Next';
    button.setAttribute('data-js','button-next')
    button.addEventListener('click', callback);
  }

  return button;
}
