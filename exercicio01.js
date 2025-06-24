const inputNumero = document.getElementById("numero")
const divTabuada = document.getElementById("tabuada")

inputNumero.addEventListener('input', function() {
    const valor = parseInt(this.value)
    divTabuada.innerHTML = "" 

    if (!isNaN(valor)) {
        const ul = document.createElement('ul')
        for (let i = 1; i <= 10; i++) {
            const li = document.createElement('li')
            li.textContent = `${valor} x ${i} = ${valor * i}` 
            ul.appendChild(li)
        }
        divTabuada.appendChild(ul) 
    }
})
