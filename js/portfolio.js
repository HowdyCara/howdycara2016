var portfolioItems = [
  {
      "image":"http://placehold.it/400x300",
      "image-alt":"SHIFT logo 2016 Cara Smith howdycara.com",
      "title":"SHIFT logo",
      "client":"SHIFT",
      "date":"2016",
      "description":"Logo created for SHIFT, a company that invests in social causes."
  },
  {
      "image":"http://placehold.it/400x300",
      "image-alt":"SHIFT logo 2016 Cara Smith howdycara.com",
      "title":"SHIFT logo",
      "client":"SHIFT",
      "date":"2016",
      "description":"Logo created for SHIFT, a company that invests in social causes."
  },
  {
      "image":"http://placehold.it/400x300",
      "image-alt":"SHIFT logo 2016 Cara Smith howdycara.com",
      "title":"SHIFT logo",
      "client":"SHIFT",
      "date":"2016",
      "description":"Logo created for SHIFT, a company that invests in social causes."
  }

];

var portfolioItemTemplate = document.getElementById("portfolio-item-template").innerHTML;
var template = Handlebars.compile(portfolioItemTemplate);
var portfolioItemsArea = document.getElementById("portfolio-items");
portfolioItemsArea.innerHTML = template(portfolioItems);
