// Ejemplo 1
let account = {
  type: 'premium',
  profile: {
    nickName: 'CraftingCode',
    firstName: 'David',
  }
}

const nickName = account.profile.nickName
const firstName = account.profile.firstName 

// Lanzará Uncaught TypeError: Cannot read property '0' of undefined
try {
  const firstOption = account.profile.options[0]
  console.log(firstOption)
} catch(error) {
  console.log(error)
}

// Nueva declaración usando short circuit &&
const firstOptionV2 = account.profile.options && account.profile.options[0]

// Deberia ser true
console.log(firstOptionV2 === undefined)

const firstOptionV3 = account.profile.options?.[0]

/**
 * Usando de una muy mala forma este operador
 */
// const foo = {}
// const horribleHorribleNesting = foo?.bar?.baz?.hello?.world?.bye?.hola?.chao?.optional?.chaining?.of?.death;
// console.log(horribleHorribleNesting)