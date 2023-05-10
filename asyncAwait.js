// Async Await

const directions = [
  'Se inscrever no programa desenvolve',
  'Estudar HTML CSS e JS',
  'Arrumar o meu Linkedin',
  'Montar o meu Pitch',
  'Treinar o meu Pitch',
  'Fazer a entrevista',
]

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

const execute = async () => {
  try {
    await getHiring(0, 1000)
    await getHiring(1, 1000)
    await getHiring(2, 1000)
    await getHiring(3, 1000)
    await getHiring(4, 1000)
    await getHiring(5, 1000)
    await getHiring(6, 1000)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('Estamos usando Async/Await')
  }
}

execute()
