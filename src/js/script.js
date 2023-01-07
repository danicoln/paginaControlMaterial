const regEntrada = document.querySelector('.button-opcao-entrada');
const regSaida = document.querySelector('.button-opcao-saida');

document.querySelector('.area-cadastro').style.display="none";
document.querySelector('.area-saida').style.display="none";
document.querySelector('.buttons-menu').style.display="none";

function registrarEntrada(){
    
    document.querySelector('.menu').style.display="none";
    document.querySelector('.buttons-menu').style.display="flex";
    document.querySelector('.area-cadastro').style.display="flex";
    
}

function registrarSaida(){
    document.querySelector('.menu').style.display="none";
    document.querySelector('.buttons-menu').style.display="flex";
    document.querySelector('.area-saida').style.display="flex";
}

function salvarEntradaMaterial(){
    
    limparEntrada();
    alert("Material salvo com sucesso!");
    return false;
}

function limparEntrada(){

    document.querySelector('.cod-produto').value = "";
    document.querySelector('.nome').value = "";
    document.querySelector('.medida').value = "";
    document.querySelector('.quantidade').value = "";
    document.querySelector('.valor-unitario').value = "";
    document.querySelector('.data-entrada').value = "";
    document.querySelector('.fornecedor').value = "";

}

function salvarSaidaMaterial(){
    
    limparSaida();
    alert("Registro de saída salvo com sucesso!");
    return false;
}

function limparSaida(){
 
    document.querySelector('.saida-cod-produto').value = "";
    document.querySelector('.saida-nome').value = "";
    document.querySelector('.saida-medida').value = "";
    document.querySelector('.saida-quantidade').value = "";
    document.querySelector('.saida-valor-unitario').value = "";
    document.querySelector('.saida-data-entrada').value = "";
    document.querySelector('.saida-fornecedor').value = "";
}
