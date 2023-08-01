function calcularIdade(event) {
    event.preventDefault()
    cadastrarUsuário();

}

function cadastrarUsuário() {
    let nomeRecebido = document.getElementById("nome").value.trim(); //trim() remove possiveis espaços no fim e começo da string
    let diaRecebido = parseInt(document.getElementById("dia-nascimento").value);
    let mesRecebido = parseInt(document.getElementById("mes-nascimento").value);
    let anoRecebido = parseInt(document.getElementById("ano-nascimento").value);

    anoAtual = new Date().getFullYear();
    let dadosUsuario = {
        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido,
        idade: idade,
        definicao: definicao
    }

    let idade = anoAtual - anoRecebido;
    console.log(idade);
    idade = 11
    if (idade <= 12) {
        console.log("Criança");

    } else if (idade < 18 && idade >= 13) {
        console.log("Adolescente");

    } else if (idade < 65 && idade >= 18) {
        console.log("Adulto");

    } else if (idade >= 65) {
        console.log("Idoso");
    }

}