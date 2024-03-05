// variaveis 
//pega pelo id do html e atribui para uma variavel no JS 
const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

//variaveis do modal 
// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal .close')

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose:document.querySelector('.modal .close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = function(event){
    event.preventDefault()
     
    //pega o valor digitado na input
    const height = inputHeight.value
    const wheight = inputWeight.value
   // console.log("deu bom ")
   // console.log(height, wheight)

    const result = IMC(wheight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
    

    console.log(result)
}
            
Modal.buttonClose.onclick = () => {
    Modal.close()
}

function IMC(wheight, height) {
    return(wheight / ((height / 100) ** 2)).toFixed(2)
}