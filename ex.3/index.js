const produto = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.05
}

function clone(objeto) {
  return { ...objeto }
}

const novoPorduto = clone(produto)
novoPorduto.nome = 'Caneta Bic Azul'

console.log(produto, novoPorduto)