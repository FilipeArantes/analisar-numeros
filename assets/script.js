const numero = document.getElementById("numero")
const lista = document.getElementById("lista")
const res = document.getElementById("res")
const valores = []

function temNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (temNumero(numero.value) && !naLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        swal.fire('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        swal.fire('Adicione valores antes de finalizar!')
    } else {
        let totalElementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / totalElementos
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os elementos e ${media}</p>`
    }
}