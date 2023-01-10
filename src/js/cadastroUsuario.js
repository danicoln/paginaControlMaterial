
const formulario = document.querySelector("form");
const inpNome = document.querySelector(".nome");
const inpEmail = document.querySelector(".email");
const inpSenha = document.querySelector(".senha");

document.querySelector('.table-users').style.display ="none";

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
    recarregaPagina();
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

function recarregaPagina(){
    window.location.reload();
}

/*================================================================================
*/

/*Listar Usuarios */

function btnListarUsers(){
    
    listarUsuario();
}

function listarUsuario(){
    document.querySelector('.lista-usuarios').style.display ="none";
    document.querySelector('.table-users').style.display ="flex";
    const url = "http://localhost:8080/users";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

       var tableBody = document.getElementById('table-body');

       for(var i = 0; i < data.length; i++){

        var row = tableBody.insertRow();
        var id = row.insertCell(0);
        var nome = row.insertCell(1);
        var email = row.insertCell(2);
        var senha = row.insertCell(3);

        id.innerHTML = data[i].id;     
        nome.innerHTML = data[i].nome;
        email.innerHTML = data[i].email;
        senha.innerHTML = data[i].senha;

       }
        });    
    };

    