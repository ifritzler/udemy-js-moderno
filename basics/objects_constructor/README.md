# Objects

### Representación de un __object constructor__:
Un object constructor no es mas que una funcion que encapsula propiedades de un objeto.
Eso lo vuelve mas dinámico pero aun asi es menos utilizado que el object literal en la vida diaria del programador.
Antiguamente cuando no habia soporte a clases, esta era la manera de trabajar orientado a objetos en js

``` js
// Object literal
const product = {
  name: 'Aspiradora ATMA H10M',
  price: 14999.99,
  category: 'Electrodomesticos',
  available: true
}

// Object constructor
function Producto (name, price, category) {
  this.name = name
  this.price = price
  this.category = category
  this.available = true
}

const product2 = new Producto('Monitor de 24 pulgadas', 500, 'Television')

```
