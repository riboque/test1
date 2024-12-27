let lastScrollY = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Usuário está rolando para baixo, esconde o header
    header.classList.add('hidden');
  } else {
    // Usuário está rolando para cima, mostra o header
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
