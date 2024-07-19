let btns = document.querySelectorAll('.button-container .btn')
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const randomColor = () => {
  let hexColor = '#'

  for (let i = 0; i < 6; i++) hexColor += hex[randomNumber()]

  return hexColor
}

const randomNumber = () => Math.floor(Math.random() * hex.length)

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let target = e.currentTarget.dataset.id
    console.log(target)
    document.body.style.backgroundColor =
      target === 'telemagenta'
        ? '#7000ff'
        : target === 'yellow'
        ? '#f6ae2d'
        : target === 'scarlet'
        ? '#e8143a'
        : randomColor()
  })
})
