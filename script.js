const abrirMenu = document.getElementById('abrirMenu');
const fecharMenu = document.getElementById('fecharMenu');
const menuCompleto = document.getElementById('menuCompleto');

abrirMenu.addEventListener('click', () => {
    menuCompleto.classList.add('ativo');
});
fecharMenu.addEventListener('click', () => {
    menuCompleto.classList.remove('ativo');
});
