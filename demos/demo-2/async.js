// Sync

/*
const myFunc = () => {
  console.log('I am syncronious function')
}

console.log('begin')
myFunc('hello')
console.log('end')
*/

// Example Async 1 - Callback functions

/*
const myAsyncFunc = (callback) => {
  // Emulate requesting a DB during 2 seconds
  setTimeout(() => {
    const data = "Some data"
    callback(data)
  }, 2000)
}

const myAnotherAsyncFunc = () => {
  // Emulate requesting a DB during 2 seconds
  setTimeout(() => {
    console.log('Hello from another async')
  }, 2000)
}

console.log('begin')
// Callback hell
myAsyncFunc((data) => {
  console.log(data)
  myAnotherAsyncFunc(() => {
    console.log('Do smth here...')
    myAnotherAsyncFunc(() => {
      console.log('Do smth else here...')
    })
  })
})
console.log('Doing something else...')
*/

// Example Async 2 - Promise syntax

/*
const myAsyncFunc = () => {
  return new Promise((resole, reject) => {
    // Emulate requesting a DB during 2 seconds
    setTimeout((err) => {
      if(false) reject("My error") // Will never happen
      const data = "Some data"
      resole(data)
    }, 2000)
  })
}

console.log('begin')
myAsyncFunc()
  .then((data) => {
    console.log(data)
    console.log('end DB request')
  })
  .catch((err) => {
    console.error(err)
  })
console.log('Doing something else...')
*/

// Example Async 3 - Async/await syntax

const myAsyncFunc = () => {
  return new Promise((resole, reject) => {
    // Emulate requesting a DB during 2 seconds
    setTimeout((err) => {
      if(true) reject("My error") // Will never happen
      const data = "Some data"
      resole(data)
    }, 2000)
  })
}

const main = async () => {
  try {
    console.log('begin')
    const data = await myAsyncFunc()
    console.log(data)
    console.log('Doing something else...')
  }
  catch(err) {
    console.log(err)
  }
}

main()
