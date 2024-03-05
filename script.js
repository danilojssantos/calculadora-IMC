// variaveis 
//pega pelo id do html e atribui para uma variavel no JS 
const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

//variaveis do modal 
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal .close')


form.onsubmit = function(event){
    event.preventDefault()
     
    //pega o valor digitado na input
    const height = inputHeight.value
    const wheight = inputWeight.value
   // console.log("deu bom ")
   // console.log(height, wheight)

    const result = IMC(wheight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')

    console.log(result)
}
            
modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
    modalWrapper.classList.remove('open')
}

function IMC(wheight, height) {
    return(wheight / ((height / 100) ** 2)).toFixed(2)
}