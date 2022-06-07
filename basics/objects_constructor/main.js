'use strict'

// Object literal
const product = {
  name: 'Aspiradora ATMA H10M',
  price: 14999.99,
  category: 'Electrodomesticos',
  available: true
}
console.log(product)

// Object constructor
function Producto (name, price, category) {
  this.name = name
  this.price = price
  this.category = category
  this.available = true
}

const product2 = new Producto('Monitor de 24 pulgadas', 500, 'Television')
console.log(product2)
