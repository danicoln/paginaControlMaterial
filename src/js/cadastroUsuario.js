
const formulario = document.querySelector("form");
const inpNome = document.querySelector(".nome");
const inpEmail = document.querySelector(".email");
const inpSenha = document.querySelector(".senha");

document.querySelector('.lista-usuarios').style.display = "flex";

function cadastrar() {
    fetch("http://localhost:8080/users", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: inpNome.value,
            email: inpEmail.value,
            senha: inpSenha.value
        })
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

    alert("Usuario cadastrado com sucesso!")
};

function limpar() {
    inpNome.value = "";
    inpEmail.value = "";
    inpSenha.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    limpar();
});


/*================================================================================
*/

/*Listar Usuarios */

function listarUsuario(){

    document.querySelector('.lista-usuarios').style.display = "flex";

    fetch("http://localhost:8080/users", {
        headers: {
            'Transfer-Encoding': 'chunked',
            'Content-Type': 'application/json'
        },
        method: "GET",
       body: "GET"

    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

       listaTabela();
};


    function listaTabela() {

        
        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.tbody.length; i++) {
            let tr = tbody.insertRow(); 

            let td_id = tr.insertCell(); 
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_senha = tr.insertCell();

            td_id.innerText = this.tbody[i].id;
            td_nome.innerText = this.tbody[i].nome;
            td_email.innerText = this.tbody[i].email;
            td_senha.innerText = this.tbody[i].senha;

        }
    }