var quotes = [
  {
      "quote":"She's an okay gal!",
      "name":"Alex B."
  },
  {
      "quote":"Her hair is curly!",
      "name":"Cara's Mom"
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

  {
      "quote":"She likes slightly rounded square corners.",
      "name":"Anonymous"
  },
  {
      "quote":"Cara's aesthetic was developed when she was struck by a meteorite.",
      "name":"Laura P."
  }

];

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

var quoteTemplate = document.getElementById("quote-template").innerHTML;
var template = Handlebars.compile(quoteTemplate);
var quoteArea = document.getElementById("quoteArea");
quoteArea.innerHTML = template(randomFrom(quotes));
