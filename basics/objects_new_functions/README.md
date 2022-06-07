# Objects

### Nuevos metodos para objetos desde ES6:

- 
``` js
// Object literal
const product = {
  name: 'Aspiradora ATMA H10M',
  price: 14999.99,
  category: 'Electrodomesticos',
  available: true
}
console.log(Object.keys(product)) // -> (4) ['name', 'price', 'category', 'available']
console.log(Object.values(product)) // -> (4) ['Aspiradora ATMA H10M', 14999.99, 'Electrodomesticos', true]
console.log(Object.entries(product)) // -> [Array(2), Array(2), Array(2), Array(2)] 
/*
0: (2) ['name', 'Aspiradora ATMA H10M']
1: (2) ['price', 14999.99]
2: (2) ['category', 'Electrodomesticos']
3: (2) ['available', true]
*/
```
