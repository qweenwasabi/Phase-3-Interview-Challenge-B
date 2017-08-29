const chai = require('chai')

const expect = chai.expect

const dbFunctions = require ('./database')

describe (`products - function for database in 'product-list' command`, () => {
  it ('should list products in the dairy category', done => {
    dbFunctions.products('dairy').then(data => {
      expect(data[0].name).to.equal('Butter')
      expect(data[6].name).to.equal('Yogurt')
      done()
    })
    .catch(err => {
      console.error(err)
    })
  })
})

describe (`givenShopper - function for database in 'shopper-orders' command`, () => {
  it ('should list orders pertaining to shopper with ID = 2', done => {
    dbFunctions.givenShopper('2').then(data => {
      expect(data[0].id).to.equal(2)
      expect(data[0].total_cost).to.equal('34.28')
      expect(data[3].id).to.equal(14)
      expect(data[3].total_cost).to.equal('40.73')
      done()
    })
    .catch(err => {
      console.error(err)
    })
  })
})

describe (`activeShoppers - function for database in 'real-shoppers' command`, () => {
  it ('should list shoppers who have placed one or more orders', done => {
    dbFunctions.activeShoppers().then(data => {
      expect(data[0].shopper_name).to.equal('Aldrich')
      expect(data[0].number_of_orders).to.equal('1')
      expect(data[5].shopper_name).to.equal('Steven')
      expect(data[5].number_of_orders).to.equal('4')
      done()
    })
    .catch(err => {
      console.error(err)
    })
  })
})
