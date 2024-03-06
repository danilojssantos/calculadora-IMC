import { Modal } from "./modal.js"
import {AlertError} from"./alert-error.js"

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
    const showAlertError = notNumber(wheight) || notNumber(height)
     
    if (showAlertError) {
        AlertError.open()
        return
    }else{
        AlertError.close()
    }
     //console.log(notNumber(wheight))
     // console.log(notNumber(height))


    const result = IMC(wheight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
    

   // console.log(result)
}
          

function notNumber(value) {
    return isNaN(value) || value == ""
}


function IMC(wheight, height) {
    return(wheight / ((height / 100) ** 2)).toFixed(2)
}