#!/usr/bin/env node

const database = require ('./database.js');

if (process.argv[2] === "product-list") {
  database.products(process.argv[3])
    .then(
      function(groceryResults) {
        console.log("Product Name | Section");
        for (i = 0; i < groceryResults.length; i++){
          console.log(groceryResults[i].name + " | " + groceryResults[i].section);
        }
        process.exit(0);
      }
    )
    .catch(function(error) {return console.log(error)});
} else if(process.argv[2] === "shopper-orders") {
  database.givenShopper(process.argv[3])
  .then(
    function(orderResults) {
    console.log("Order ID | Total Cost");
  for (j = 0; j < orderResults.length; j++){
    console.log(orderResults[j].id + " | " +
      orderResults[j].total_cost);
  }
  process.exit(0);
}
  )
  .catch(function(error) {return console.log(error)});
} else if(process.argv[2] === "real-shoppers") {
  database.activeShoppers()
  .then(
    function(shopperResults) {
      console.log("Shopper Name | Number of Orders");
      for (k = 0; k < shopperResults.length; k++){
        console.log(shopperResults[k].shopper_name + " | " +
          shopperResults[k].number_of_orders);
    }
    process.exit(0);
  }) .catch(function(error) {return console.log(error)});
} else {
  console.log("Command doesn't exist!! Commands are product-list (category), shopper-orders (shopper_id), and real-shoppers");
}
