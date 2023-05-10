// Promises
// Promise States

// const promisePending = new Promise((resolve, reject) => {})
// const promiseResolved = Promise.resolve(42)
// const promiseRejected = Promise.reject('We rejected it')

// console.log(promisePending)
// console.log(promiseResolved)
// console.log(promiseRejected)

const directions = [
  'Se inscrever no programa desenvolve',
  'Estudar HTML CSS e JS',
  'Arrumar o meu Linkedin',
  'Montar o meu Pitch',
  'Treinar o meu Pitch',
  'Fazer a entrevista',
]

//   const getHiring = (step, time, callback, errorCallback) => {
//     setTimeout(() => {
//       console.log(directions[step])
//       if (!directions[step]) errorCallback('não tenho esse passo')
//       else callback()
//     }, time)
//   }

const getHiring = (step, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (directions[step]) {
        console.log(directions[step])
        resolve()
      } else reject('não tenho esse passo')
    }, time)
  })
}

getHiring(0, 1000)
  .then(() => getHiring(1, 1000))
  .then(() => getHiring(2, 1000))
  .then(() => getHiring(3, 1000))
  .then(() => getHiring(4, 1000))
  .then(() => getHiring(5, 1000))
  .then(() => getHiring(6, 1000))
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('parabéns aprendemos promises')
  })
