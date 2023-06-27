let clientes = []

function  cadastrar() {
    

    let cliente = {
        nome: document.getElementById('inpNome').value,
        data: document.getElementById('inpData').value 
    }
    clientes.push(cliente)
    console.log(clientes)
    limparInputs()
}

function limparInputs(){
    nome: document.getElementById('inpNome').value = ''
    data: document.getElementById('inpData').value = ''
    document.getElementById('inpNome').focus()
}
document.getElementById('inpNome').focus()
