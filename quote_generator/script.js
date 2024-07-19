const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  "Life is what happens when you're busy making other plans. - John Lennon",
  'The purpose of our lives is to be happy. - Dalai Lama',
  'Get busy living or get busy dying. - Stephen King',
  'You only live once, but if you do it right, once is enough. - Mae West',
  "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
  'If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt',
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  'Never let the fear of striking out keep you from playing the game. - Babe Ruth',
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
  'You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy',
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  'The only impossible journey is the one you never begin. - Tony Robbins',
  'In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar',
  'Life is really simple, but we insist on making it complicated. - Confucius',
  'May you live all the days of your life. - Jonathan Swift',
  'Happiness is not something ready-made. It comes from your own actions. - Dalai Lama',
]

let generateQuoteBtn = document.getElementById('generateQuote')
let quoteText = document.querySelector('.quote-text')

let usedIndexed = new Set()

const generateQuote = () => {
  if (usedIndexed.size > quotes.length) usedIndexed.clear()

  while (true) {
    let randomInt = Math.floor(Math.random() * quotes.length)
    if (usedIndexed.has(randomInt)) continue
    quoteText.textContent = quotes[randomInt]

    usedIndexed.add(randomInt)
    break
  }
}

generateQuoteBtn.addEventListener('click', generateQuote)
