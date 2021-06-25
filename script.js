let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let oi = document.querySelector('#oi')


function cliqueNoBotao(){
    ola.innerHTML = `Olá  ${nome.value}, bem-vindo(a). Você tem ${idade.value} anos. `;
}