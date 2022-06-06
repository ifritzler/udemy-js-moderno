# Objects

### Representación de un __object literal__:

``` js
const product = {
    name: 'Veggie Burguers x4 320g',
    description: 'Burguer made with vegetables and love.',
    price: 500,
    available: true
}
```
- Estos mismos deben llevar ':' en la asignacion de valores.
- Son encerrados entre llaves: { }
- Cada 'property' o 'key' del objeto se separa con ','
- El objeto puede contener la cantidad de propiedades que se crean necesarias.
- Pueden almacenarse otros objetos

Ejemplo de __object literal__ con mas properties:
``` js
const product = {
    name: 'Veggie Burguers x4 320g',
    description: 'Burguer made with vegetables and love.',
    price: 499.90,
    available: true,
    variant: 'Onion',
    otherVariants: ['cheese, chicken, beetroot, lentils, beans'],
    company: {
        name: 'NOT Burguer S.A',
        address: {
            country: 'Argentina',
            state: 'Buenos Aires',
            city: 'Mar del Plata',
            postalCode: 7600,
        }
    }
}
```

### Acceso a las properties

- Estas pueden ser accedidas mediante dos notaciones:
  - dot notation
  - brackets notation [ ]

Ejemplos con dot notation:

``` js
console.log(product.available)
console.log(product.company)
console.log(product.price)
console.log(product.otherVariants)
```

Ejemplos con brackets notation:

``` js
console.log(product['available'])
console.log(product['price'])
```