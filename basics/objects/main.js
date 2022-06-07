'use strict'

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
      postalCode: 7600
    }
  }
}

// Mostramos nuestro producto completo en consola.
console.log(product)

// Accediendo con la notacion de punto a las properties.
console.log(product.available)
console.log(product.company)
console.log(product.price)
console.log(product.otherVariants)

/*
  Otra manera poco habitual es acceder mediante notacion de corchetes.
  Puede ser util cuando la property a leer dependa de una variable en una funcion.
*/
// eslint-disable-next-line dot-notation
console.log(product['available'])

// Si queremos añadir una nueva propiedad fuera del objeto
product.color = 'blue'

// Tambien podriamos hacer uso de la brackets notation
// eslint-disable-next-line dot-notation
product['color'] = 'green'

// Podemos eliminar propiedades de nuestro objeto
delete product.color

// Podemos extraer data en variables de dos maneras.
// La manera mas antigua mediante dot notation.

const pruebaNombre = product.name
console.log(pruebaNombre)

/*
  Podemos hacer uso tambien de algo llamado 'destructuring',
  esto nos permite poder simplificar la sintaxis y crear las variables al mismo tiempo
  que se extraen del objeto.
*/
const { name, price, description } = product
console.log(name)
console.log(price)
console.log(description)

// Destructuring anidado

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

// Prevenir la mutabilidad
Object.freeze(product)
console.log(Object.isFrozen(product))

// Sellar el objeto para que solo puedan modificarse los valores de las llaves existentes

Object.seal(product)
console.log(Object.isSealed(product))
