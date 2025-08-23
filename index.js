const barra = document.querySelector('.preenchimento');
barra.addEventListener('animationend', () =>{
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('conteudo').style.display = 'block';

  const conteudo = document.getElementById('conteudo');
  conteudo.classList.add('animacao-site');
});