const menuBar = document.querySelector('.icon-bar')
const menuNav = document.querySelector('.box')

menuBar.addEventListener('click', function () {
  menuNav.classList.toggle('active')
  menuBar.classList.toggle('rotate')
})

document.addEventListener('click', function (event) {
  if (event.target.closest('.icon-bar')) return
  if (event.target.closest('.box')) return
  menuNav.classList.remove('active')
  menuBar.classList.remove('rotate')
})
