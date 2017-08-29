const options = {};
const pgp = require('pg-promise')(options);
const conString = 'postgres://localhost:5432/grocery_store';
const db = pgp(conString);

function products(item){
  return db.any((`SELECT name, section FROM grocery_items WHERE  section = $1`), [item]);
}

function givenShopper(item){
  return db.any((`SELECT orders.id, SUM(grocery_items.price)as total_cost FROM orders
                  INNER JOIN order_list ON orders.id = order_list.order_id
                  INNER JOIN grocery_items ON grocery_items.id = order_list.grocery_id
                  WHERE orders.shopper_id = $1 GROUP BY orders.id;`), [item]);
}
function activeShoppers(){
  return db.any(`SELECT shoppers.name as shopper_name, COUNT(*) AS number_of_orders FROM shoppers
                  INNER JOIN orders ON shoppers.id = orders.shopper_id GROUP BY shoppers.name ORDER BY COUNT(*) ASC;`)
}

//check out givenshopper function on second innerjoin
module.exports = {
  products,
  givenShopper,
  activeShoppers
}
