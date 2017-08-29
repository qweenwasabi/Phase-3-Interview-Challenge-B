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


module.exports = {
  products,
  givenShopper
}
