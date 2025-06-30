const barFuntion = function () {
  document.querySelectorAll('.navbar a').forEach(element => element.classList.remove('active'));
  this.classList.add('active');

}
const navbar = document.querySelectorAll('.navbar a');
navbar.forEach(link => {
  link.addEventListener('click', barFuntion)
})