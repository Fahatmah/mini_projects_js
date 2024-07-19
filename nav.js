let menuBtn = document.querySelector('.menu-btn')

export const navMobile = () => {
  menuBtn.addEventListener('click', () => {
    document.querySelector('.links-container').classList.toggle('show')
  })
}
