function calcularIdade() {
    cadastrarUsuário();

}

function cadastrarUsuário() {
    let nomeRecebido = document.getElementById("nome").value.trim(); //trim() remove possiveis espaços no fim e começo da string
    let diaRecebido = parseInt(document.getElementById("dia-nascimento").value);
    let mesRecebido = parseInt(document.getElementById("mes-nascimento").value);
    let anoRecebido = parseInt(document.getElementById("ano-nascimento").value);

    anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoRecebido;
    let classificacao;
    
    if (idade <= 12) {
        classificacao = "Criança";

    } else if (idade < 18 && idade >= 13) {
        classificacao = "Adolescente";

    } else if (idade < 65 && idade >= 18) {
        classificacao = "Adulto";

    } else if (idade >= 65) {
        classificacao = "Idoso";
    }

    let dadosUsuario = {
        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido,
        idade: idade,
        classificacao: classificacao
        //precisa de data hora?
    }

    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    listaUsuarios.push(dadosUsuario);

    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
}

function carregarUsuario() {
    let listaUsuarios = []

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    if (listaUsuarios.length == 0) {
        let tabela = document.getElementById("corpo_tabela");

        tabela.innerHTML = `<tr class="linha-mensagem">
        <td colspan="4">Nenhum usuário cadastrado!</td>
    </tr>`
    } else {
        MontarTabela(listaUsuarios);
    }
}

window.addEventListener('DOMContentLoaded', () => carregarUsuario());

function MontarTabela(listaDeCadastrados) {
    let tabela = document.getElementById("corpo-tabela");

    let template = '';

    listaDeCadastrados.forEach(pessoa => {
        template += `<tr>
            <td data-cell="nome">${pessoa.nome}</td>
            <td data-cell="data de nascimento">${pessoa.dia}/${pessoa.mes}/${pessoa.ano}</td>
            <td data-cell="idade">${pessoa.idade}</td>
            <td data-cell="Faixa Etária">${pessoa.classificacao}</td>
        </tr>`

        tabela.innerHTML = template;
    })
}


//Passo 8 - Limpar local storage
function deletarRegistro() {
    localStorage.clear()
    window.location.reload();


}