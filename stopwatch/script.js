let secondsElapsed = 0
let interval = null

let timeText = document.querySelector('.time-text')
let startButton = document.getElementById('startButton')

function padStart(val) {
  return String(val).padStart(2, '0')
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60)
  const seconds = secondsElapsed % 60
  timeText.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`
}

function timer() {
  secondsElapsed++
  setTime()
}

function startClock() {
  if (interval) stopClock()
  interval = setInterval(timer, 1000)
  startButton.disabled = true
  if (startButton.textContent === 'Resume') startButton.textContent = 'Start'
  // setStartButton()
}

function stopClock() {
  clearInterval(interval)
  if (secondsElapsed > 0) startButton.textContent = 'Resume'
  // setStartButton()
  startButton.disabled = false
}

function resetClock() {
  stopClock()
  secondsElapsed = 0
  setTime()
  if (startButton.textContent === 'Resume') startButton.textContent = 'Start'
  // setStartButton()
}

// function setStartButton() {
//   if (secondsElapsed > 0) startButton.textContent = 'Resume'
//   if (startButton.textContent === 'Resume')
//     startButton.textContent = 'Start'
// }
