let form = document.querySelector('.input-container form')

const palindromeChecker = (word) =>
  word.toLowerCase() === word.toLowerCase().split('').reverse().join('') &&
  word.split('').length > 2
    ? true
    : false

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let inputWord = form.querySelector('input').value
  let palindromeResult = form.querySelector('.palindrome-text')

  if (inputWord !== '') {
    palindromeResult.style.display = 'flex'

    palindromeChecker(inputWord) === true
      ? (palindromeResult.innerHTML = `${inputWord} is a Palindrome Word <img src="assets/check.svg" alt="check icon" />`)
      : (palindromeResult.innerHTML = `${inputWord} is not a Palindrome Word`)

    palindromeResult.style.color =
      palindromeChecker(inputWord) === true ? '#57D44C' : '#E8143A'
  }
})
