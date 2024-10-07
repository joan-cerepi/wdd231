const menuIcon = document.getElementById('menu-icon');
const navigation = document.getElementsByTagName('nav')[0];

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('change');
  navigation.classList.toggle('show-nav');
});