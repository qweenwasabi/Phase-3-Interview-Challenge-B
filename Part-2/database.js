const options = {};
const pgp = require('pg-promise')(options);
const conString = 'postgres://localhost:5432/grocery_store';
const db = pgp(conString);

function products(item){
  return db.any(('SELECT name, section FROM grocery_items WHERE  section = $1'), [item]);
}

module.exports = {
  products
}
