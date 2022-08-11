const quotes = [
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
