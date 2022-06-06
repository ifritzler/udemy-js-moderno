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
