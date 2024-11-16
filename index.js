
var quotes = [
    {
    quote: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
},
{
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzy"
},
{
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra"
},
{
    quote: "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "Nelson Mandela"
},
{
    quote: "Do not take life too seriously. You will not get out alive.",
    author: "Elbert Hubbard"
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein"
},
{
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou"
},
{
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
}
];

var button = document.getElementById("new-quote-button");
var quoteDisplay = document.getElementById("quote-display");
var authorDisplay = document.getElementById("author-display");


button.addEventListener("click", () => {
  
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

  
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `-- ${randomQuote.author}`;
});
