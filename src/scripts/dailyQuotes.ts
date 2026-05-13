export const dailyQuotes = [
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    source: "Speech in Madison Park High School, Boston (1990)"
  },

  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    source: "Attributed in numerous Gandhi collections (widely cited)"
  },

  {
    quote: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle",
    source: "Attributed saying"
  },

  {
    quote: "Wisdom begins in wonder.",
    author: "Socrates",
    source: "Attributed saying"
  },

  {
    quote: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    source: "The Way to Wealth (1758)"
  },

  {
    quote: "Educating the mind without educating the heart is no education at all.",
    author: "Aristotle",
    source: "Attributed saying"
  },

  {
    quote: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
    source: "Interview quotation"
  },

  {
    quote: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
    source: "Widely documented quote"
  },

  {
    quote: "If you think education is expensive, try ignorance.",
    author: "Derek Bok",
    source: "Former Harvard President"
  },

  {
    quote: "Peace begins with a smile.",
    author: "Mother Teresa",
    source: "Public addresses"
  },

  {
    quote: "Share your knowledge. It is a way to achieve immortality.",
    author: "Dalai Lama XIV",
    source: "The Book of Joy"
  },

  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    source: "Widely cited"
  },

  {
    quote: "Young people must be empowered to become agents of positive change.",
    author: "Pope Francis",
    source: "Christus Vivit (2019)"
  },

  {
    quote: "Education is a matter of building bridges.",
    author: "Pope Francis",
    source: "Address on education and dialogue"
  },

  {
    quote: "Develop a passion for learning. If you do, you will never cease to grow.",
    author: "Anthony J. D’Angelo",
    source: "The College Blue Book"
  }
];

export function getDailyQuote() {
  const randomIndex = Math.floor(
    Math.random() * dailyQuotes.length
  );

  return dailyQuotes[randomIndex];
}