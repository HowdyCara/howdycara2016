var portfolioItems = [
  {
      "image":"http://placehold.it/400x300",
      "image-alt":"SHIFT logo 2016 Cara Smith howdycara.com",
      "title":"SHIFT logo",
      "client":"SHIFT",
      "date":"2016",
      "description":"Logo created for SHIFT, a company that invests in social causes.",
      "type":"logo"
  },
  {
      "image":"http://placehold.it/400x300",
      "image-alt":"SHIFT logo 2016 Cara Smith howdycara.com",
      "title":"Game",
      "client":"SHIFT",
      "date":"2016",
      "description":"Logo created for SHIFT, a company that invests in social causes.",
      "type":"game"
  },
  {
      "image":"http://placehold.it/400x300",
      "image-alt":"blha hahahhas",
      "title":"SHIFT",
      "client":"SHIFT",
      "date":"2016",
      "description":"samwaisisge gamji",
      "type":"logo"
  }

];

// PORTFOLIO PAGE

if (document.getElementById("portfolio-item-template")) {
  var portfolioItemTemplate = document.getElementById("portfolio-item-template").innerHTML;
  var template = Handlebars.compile(portfolioItemTemplate);
  var portfolioItemsArea = document.getElementById("portfolio-items");
  portfolioItemsArea.innerHTML = template(portfolioItems);
}

// HOME PAGE

if (document.getElementById("feeds-template")) {
  console.log("I'm running");
  var feedsTemplate = document.getElementById("feeds-template").innerHTML;
  var template = Handlebars.compile(feedsTemplate);

  var logoFeedArea = document.getElementById("logo-feed-area");
  logoFeedArea.innerHTML = template(portfolioItems.find(findLogo));

  var gameFeedArea = document.getElementById("game-feed-area");
  gameFeedArea.innerHTML = template(portfolioItems.find(findGame));
}

function findLogo(item) {
    return item.type === "logo";
}

function findGame(item) {
    return item.type === "game";
}
