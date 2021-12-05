function entrar() {
    var nome = window.document.getElementById('nome').value

    if(nome == ''){
        alert('Digite o seu nome por favor!')
    }else if (nome != ''){
        window.location = 'pagina.html'
    }
    localStorage.setItem("nome", document.getElementById('nome1').value)
}

window.document.getElementById('nome1').value = localStorage.getItem("nome")
document.querySelector("#nome1").innerHTML = "Olá, " + localStorage.getItem("nome")

function fechar() {
    apoio.style.display= 'none'
}
function apoio12() {
    apoio.style.display= 'block'
}

function casameno(params) {
    window.location= 'https://www.facebook.com/'
}