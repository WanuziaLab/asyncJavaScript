// Asynchronous JavaScript

const eatDinner = () => {
  setTimeout(() => {}, 2000)
}
const eatDessert = () => {
  console.log('Alegria, Doce!!!!')
}

const eat = (coisaQueVemDepois) => {
  setTimeout(() => {
    console.log('Estou jantando')
    coisaQueVemDepois()
  }, 2000)
}

eat(eatDessert)

const directions = [
  'Se inscrever no programa desenvolve',
  'Estudar HTML CSS e JS',
  'Arrumar o meu Linkedin',
  'Montar o meu Pitch',
  'Treinar o meu Pitch',
  'Fazer a entrevista',
]

const getHiring = (step, time, callback, errorCallback) => {
  setTimeout(() => {
    console.log(directions[step])
    if (!directions[step]) errorCallback('não tenho esse passo')
    else callback()
  }, time)
}

getHiring(
  0,
  1000,
  () => {
    getHiring(
      1,
      5000,
      () => {
        getHiring(
          2,
          2000,
          () => {
            getHiring(
              3,
              3000,
              () => {
                getHiring(
                  4,
                  1000,
                  () => console.log('chegamos'),
                  (err) => console.log(err)
                )
              },
              (err) => console.log(err)
            )
          },
          (err) => console.log(err)
        )
      },
      (err) => console.log(err)
    )
  },
  (err) => console.log(err)
)
