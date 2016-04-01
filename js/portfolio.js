var portfolioItems = [
  {
      "image":"img/800x600-hum-02.jpg",
      "image-alt":"Humana interactive PDF tool | Cara Smith",
      "title":"Interactive PDF tool",
      "client":"Humana",
      "date":"2016",
      "description":"Custom tool designed for an interactive PDF that functions and navigates as an app in instances where an app cannot be used.",
      "type":"design"
  },
  {
      "image":"img/800x600-hum-01.jpg",
      "image-alt":"Humana town hall presentation and corresponding graphics | Cara Smith",
      "title":"Presentation graphics",
      "client":"Humana",
      "date":"2015",
      "description":"Humana town hall presentation and corresponding graphics including signage and remote graphics used for the live stream feed for remote employees.",
      "type":"design"
  },
  {
      "image":"img/800x600-electropolis-01.jpg",
      "image-alt":"Electropolis art and logo design | Cara Smith",
      "title":"Logo and art development",
      "client":"Game theme: maximum capacity",
      "date":"2016",
      "description":"Art asset development and logo design for Electropolis for Train Jam 2016 - a 52 hour jam on a train from Chicago to San Francisco - a match-3 game about harnessing the power of lightning to power a city.",
      "type":"game"
  },
  {
      "image":"img/800x600-wzl-01.jpg",
      "image-alt":"Warp Zone Louisville logo design and branding | Cara Smith",
      "title":"Logo & branding",
      "client":"Louisville Makes Games!",
      "date":"2016",
      "description":"Warp Zone Louisville logo design and branding.",
      "type":"logo"
  },
  {
      "image":"img/800x600-cj-01.jpg",
      "image-alt":"Cluster junk art and logo design | Cara Smith",
      "title":"Logo and art development",
      "client":"Game theme: growing",
      "date":"2015",
      "description":"Art asset development and logo design for Cluster Junk for Ludum Dare 34, a game about collecting trash to become the largest trash island in the Pacific.",
      "type":"game"
  },
  {
      "image":"img/800x600-adelante-02.jpg",
      "image-alt":"Adelante Hispanic Achievers logo design and rebrand | Cara Smith",
      "title":"Logo & rebrand",
      "client":"Adelante Hispanic Achievers",
      "date":"2016",
      "description":"Adelante Hispanic Achievers logo design and rebrand.",
      "type":"logo"
  },
  {
      "image":"img/800x600-lmg-01.jpg",
      "image-alt":"Louisville Makes Games! collateral design | Cara Smith",
      "title":"Louisville Makes Games! flyer",
      "client":"Louisville Makes Games!",
      "date":"2015",
      "description":"Flyer designed to serve as information for the newly-formed, non-profit organization.",
      "type":"design"
  },
  {
        "image":"img/800x600-art-01.jpg",
        "image-alt":"Art: Suspended | Cara Smith",
        "link":"http://howdycara.tumblr.com/post/119996679139/suspended",
        "title":"Suspended",
        "date":"2015",
        "description":"A state of suspended emotion and the external influencers on the whole self.",
        "type":"game"
    },
  {
        "image":"img/800x600-urbanHoney-01.jpg",
        "image-alt":"Gordon's Urban Honey concept art and logo for 6-hour game jam | Cara Smith",
        "link":"http://howdycara.tumblr.com/post/138441196059/ive-been-really-bad-about-posting-what-ive",
        "title":"Logo and concept art",
        "client":"Game theme: bees",
        "date":"2015",
        "description":"Gordon's Urban Honey - Ironically hipster game concept art and logo for 6-hour game jam.",
        "type":"game"
    },
    {
        "image":"img/800x600-free-01.jpg",
        "image-alt":"Custom illustration for senior-focused business card | Cara Smith",
        "title":"Illustration",
        "client":"Freelance",
        "date":"2012",
        "description":"Custom illustration for senior-focused business card.",
        "type":"logo"
    },
  {
      "image":"img/800x600-lub-03.jpg",
      "image-alt":"LubriSynHA collateral design and rebrand | Cara Smith",
      "title":"LubriSynHA Flyers",
      "client":"LubriSynHA",
      "date":"2013",
      "description":"Flyer design and rebrand example of LubriSynHA",
      "type":"design"
  },
  {
      "image":"img/800x600-lub-01.jpg",
      "image-alt":"Gatefold brochure rebranded design for LubriSynHA - Pet | Cara Smith",
      "title":"Rebranded gatefold brochure – Pet",
      "client":"LubriSynHA",
      "date":"2013",
      "description":"Gatefold brochure rebranded design for pet products for LubriSynHA",
      "type":"design"
  },
  {
      "image":"img/800x600-lub-04.jpg",
      "image-alt":"Illustration and publication cover design for LubriSynLVS and Max-Strum | Cara Smith",
      "title":"Illustration and design",
      "client":"LubriSynLVS and Max-Strum",
      "date":"2013",
      "description":"Illustration and publication cover design for LubriSynLVS and Max-Strum",
      "type":"design"
  },
  {
      "image":"img/800x600-lub-02.jpg",
      "image-alt":"Gatefold rebrand design for LubriSynHA - Equine| Cara Smith",
      "title":"Rebranded gatefold brochure - Equine",
      "client":"LubriSynHA",
      "date":"2013",
      "description":"Gatefold brochure rebranded design for equine products for LubriSynHA",
      "type":"design"
  },
  {
      "image":"img/800x600-lub-05.jpg",
      "image-alt":"Label design for a•ha! lip balm | Cara Smith",
      "title":"Product label design",
      "client":"LubriSynHA",
      "date":"2013",
      "description":"Gatefold brochure design for equine products for LubriSynHA",
      "type":"design"
  },
  {
      "image":"img/800x600-lub-06.jpg",
      "image-alt":"Rebranded label design for LubriSynHA | Cara Smith",
      "title":"Rebranded product label design",
      "client":"LubriSynHA",
      "date":"2012",
      "description":"Rebranded product label design for LubriSynHA",
      "type":"design"
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
