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
}
