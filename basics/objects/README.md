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

### Asignación de valor a las properties
Se pueden asignar nuevos valores o nuevas properties con el operador '=' usando dot notation y brackets notation.
``` js
product.color = 'blue'
product['color'] = 'green'
```

### Eliminación de las properties

Usando la palabra reservada 'delete' podremos eliminar una propiedad que nos llegue en un objeto
``` js 
delete product.color 
```

### Extrayendo data del __object literal__:
``` js
const name = product.name
```

Con __destructuring__:
``` js
const { name, price, description, company } = product
```
- Este ultimo tiene como particularidad que crea la variable y asigna el valor todo al mismo tiempo
- En caso de que el nombre de la variable no exista como key en el objecto tomara de valor 'undefined' ya que esta misma no esta definida en el objeto.

### Destructuring con objetos anidados

``` js
const { available, variant, company, company: { address: { country } }, company: { address: { state } } } = product
console.log(available)
console.log(variant)
console.log(company)
console.log(country)
console.log(state)
```

Otra forma de verlo identado:
``` js
const {
  available,
  variant,
  company,
  company: {
    address: {
      country
    }
  },
  company: {
    address: {
      state
    }
  }
} = product
console.log(available)
console.log(variant)
console.log(company)
console.log(country)
console.log(state)
```

### Prevenir mutabilidad de los __object literal__

Para esto es necesario e indispensable activar el modo estricto en js.

En la primera linea de nuestro codigo colocaremos lo siguiente:
``` js
'use strict'
```
Luego de tener listo nuestro objeto podemos freezarlo de la siguiente manera:
``` js
Object.freeze(product)
/* 
  Esta siguiente linea nos devolvera true o false
  dependiendo si el objeto se freezo o no.
  Nos dara un comportamiento mucho mas real a una variable 
  de tipo const
*/ 
console.log(Object.isFrozen(product))
```

### Permitir solo modificacion de values en los __object literal__

Para esto es necesario e indispensable activar el modo estricto en js.

En la primera linea de nuestro codigo colocaremos lo siguiente:
``` js
'use strict'
```
Luego de tener listo nuestro objeto podemos sellarlo de la siguiente manera:
``` js
Object.seal(product)
/* 
  Esta siguiente linea nos devolvera true o false
  dependiendo si el objeto se selló o no.
*/ 
console.log(Object.isSealed(product))
```
