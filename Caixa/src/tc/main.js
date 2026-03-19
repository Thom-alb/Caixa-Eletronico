//el == Elemento depois o nome da variavel referente ao elemento
//document é tudo que esta em nosso arquivo
//query selector esta recebendo alguma informação do elemento socilictado
// o parametro passado é o nome do elemento
const elVal = document.querySelector(".value")
const elBtn = document.querySelector(".btn")
const elReal = document.querySelector(".avisoNum")
const elCentavo = document.querySelector(".avisoCent")
const elNotasDuzentos = document.querySelector(".notasDuzentos")
const elNotasCem = document.querySelector(".notasCem")
const elNotasCinquenta = document.querySelector(".notasCinquenta")
const elNotasVinte = document.querySelector(".notasVinte")
const elNotasDez = document.querySelector(".notasDez")
const elNotasCinco = document.querySelector(".notasCinco")
const elNotasDois = document.querySelector(".notasDois")
const elNotasUm = document.querySelector(".notasUm");
//para um elemento no caso botão o evento de clique ativa um evento, o evento criado possui previnir padrão, ou seja repete a ação,
elBtn.addEventListener("click", (event) => {
    elReal.classList.add("none")
    elCentavo.classList.add("none")
    event.preventDefault()
    //atribuição de valor  para tipo numero e uma variavel
    const value = Number(elVal.value)
    //checando se o valor recebido está vazio ou não é número
    if (value == "" || isNaN(value)) {
        elReal.classList.remove("none")
        return
    } 
    if (value % 1 !=0){
        elCentavo.classList.remove("none")
        return
    }
    //checagem do saldo, o valor é divido pelas notas pedidas e o que sobrar é divido pelo valor de uma nota menor, 
    //repetindo ate não sobrar valor, resto sera exibido
    const notasDuzentos = parseInt(value / 200)
    let resto = value % 200
    const notasCem = parseInt(resto / 100)
    resto = resto % 100;
    const notasCinquenta = parseInt(resto / 50)
    resto = resto % 50;
    const notasVinte = parseInt(resto / 20)
    resto = resto % 20;
    const notasDez = parseInt(resto / 10)
    resto = resto % 10;
    const notasCinco = parseInt(resto / 5)
    resto = resto % 5;
    const notasDois = parseInt(resto / 2)
    resto = resto % 2;
    const notasUm = parseInt(resto);
    //exibição do saque, verifica se possui notas, se possuir ele vai na lista de atributos da classe e remove o efeito none,
    //em seguida exibindo a nota e quantas tem
    if (notasDuzentos > 0) {
        elNotasDuzentos.classList.remove("none")
        elNotasDuzentos.textContent = "Notas de R$ 200,00: " + notasDuzentos
    } else { elNotasDuzentos.classList.add("none") }

    if (notasCem > 0) {
        elNotasCem.classList.remove("none")
        elNotasCem.textContent = "Notas de R$ 100,00: " + notasCem
    } else { elNotasCem.classList.add("none") }

    if (notasCinquenta > 0) {
        elNotasCinquenta.classList.remove("none")
        elNotasCinquenta.textContent = "Notas de R$ 50,00: " + notasCinquenta
    } else { elNotasCinquenta.classList.add("none") }

    if (notasVinte > 0) {
        elNotasVinte.classList.remove("none")
        elNotasVinte.textContent = "Notas de R$ 20,00: " + notasVinte
    } else { elNotasVinte.classList.add("none") }

    if (notasDez > 0) {
        elNotasDez.classList.remove("none")
        elNotasDez.textContent = "Notas de R$ 10,00: " + notasDez
    } else { elNotasDez.classList.add("none") }

    if (notasCinco > 0) {
        elNotasCinco.classList.remove("none")
        elNotasCinco.textContent = "Notas de R$ 5,00: " + notasCinco
    } else { elNotasCinco.classList.add("none") }

    if (notasDois > 0) {
        elNotasDois.classList.remove("none")
        elNotasDois.textContent = "Notas de R$ 2,00: " + notasDois
    } else { elNotasDois.classList.add("none") }

    if (notasUm > 0) {
        elNotasUm.classList.remove("none")
        elNotasUm.textContent = "Notas de R$ 1,00: " + notasUm;
    } else { elNotasUm.classList.add("none") }

});