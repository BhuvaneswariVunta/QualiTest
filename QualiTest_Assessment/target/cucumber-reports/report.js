$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Wishlist.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sampleTest"
    }
  ]
});
formatter.before({
  "duration": 14269044102,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login to the application with valid credentials",
  "description": "",
  "id": "login-test;login-to-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I add four different products to my wishlist",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I view my wishlist table",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I find total four selected items in my Wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I search for lowest price product",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am able to add the lowest price item to my cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am able to verify the item in my cart",
  "keyword": "Then "
});
formatter.match({
  "location": "baseStepDefinition.iAddFourDifferentProductsToMyWishlist()"
});
formatter.result({
  "duration": 12502599752,
  "status": "passed"
});
formatter.match({
  "location": "baseStepDefinition.iViewMyWishlistTable()"
});
formatter.result({
  "duration": 440442592,
  "status": "passed"
});
formatter.match({
  "location": "baseStepDefinition.iFindTotalFourSelectedItemsInMyWishlist()"
});
formatter.result({
  "duration": 25430801,
  "status": "passed"
});
formatter.match({
  "location": "baseStepDefinition.iSearchForLowestPriceProduct()"
});
formatter.result({
  "duration": 121588010,
  "status": "passed"
});
formatter.match({
  "location": "baseStepDefinition.iAmAbleToAddTheLowestPriceItemToMyCart()"
});
formatter.result({
  "duration": 3080062930,
  "status": "passed"
});
formatter.match({
  "location": "baseStepDefinition.iAmAbleToVerifyTheItemInMyCart()"
});
formatter.result({
  "duration": 2441220004,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 478920752,
  "status": "passed"
});
});