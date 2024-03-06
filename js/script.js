import { Modal } from "./modal.js"
import {AlertError} from"./alert-error.js"
import { calculateIMC,notNumber } from "./utils.js"

// variaveis 
//pega pelo id do html e atribui para uma variavel no JS 
const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

//variaveis do modal 
// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal .close')



form.onsubmit = function(event){
    event.preventDefault()
     
    
    const height = inputHeight.value
    const wheight = inputWeight.value
    const wheightOrHeightIsNotANumber = notNumber(wheight) || notNumber(height)
     
    if (wheightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }else{
        AlertError.close()
    }
     //console.log(notNumber(wheight))
     // console.log(notNumber(height))


    const result = calculateIMC(wheight, height)
        displayResultMessage(result)

    }

    function displayResultMessage(result){
        const message = `Seu IMC é de ${result}`

        Modal.message.innerText = message
        Modal.open()
    

   // console.log(result)
}
     inputWeight.oninput=() => AlertError.close()
