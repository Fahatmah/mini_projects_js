const emojis = [
  '🏂🏻',
  '🏂🏻',
  '🚴🏻',
  '🚴🏻',
  '👩‍🚀',
  '👩‍🚀',
  '🫀',
  '🫀',
  '😹',
  '😹',
  '👑',
  '👑',
  '👩🏽‍💻',
  '👩🏽‍💻',
  '🫶🏼',
  '🫶🏼',
]

let shuffle_Emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div')
  box.className = 'item'
  box.innerHTML = shuffle_Emojis[i]

  box.onclick = function () {
    this.classList.add('flip-box')
    setTimeout(() => {
      if (document.querySelectorAll('.flip-box').length > 1) {
        let item_One = document.querySelectorAll('.flip-box')[0]
        let item_Two = document.querySelectorAll('.flip-box')[1]

        if (item_One.innerHTML === item_Two.innerHTML) {
          item_One.classList.add('box-match')
          item_Two.classList.add('box-match')

          item_Two.classList.remove('flip-box')
          item_One.classList.remove('flip-box')

          if (document.querySelectorAll('.box-match').length === emojis.length)
            alert('You win!')
        } else {
          item_Two.classList.remove('flip-box')
          item_One.classList.remove('flip-box')
        }
      }
    }, 500)
  }

  document.querySelector('.grid-container .grid').appendChild(box)
}
