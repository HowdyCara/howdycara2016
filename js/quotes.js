var quotes = [
  {
      "quote":"She's an okay gal!",
      "name":"Alex B."
  },
  {
      "quote":"Her hair is curly!",
      "name":"Mom"
  },
  {
      "quote":"Cara likes cats.",
      "name":"L.K.E."
  },
  {
      "quote":"She's great at being!",
      "name":"Lucas E."
    },
  {
      "quote":"Low res imagery offends her tastes.",
      "name":"Luke E."
    },

];

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

var quoteTemplate = document.getElementById("quote-template").innerHTML;
var template = Handlebars.compile(quoteTemplate);
var quoteArea = document.getElementById("quoteArea");
quoteArea.innerHTML = template(randomFrom(quotes));
