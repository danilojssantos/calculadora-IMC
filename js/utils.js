export function notNumber(value) {
    return isNaN(value) || value == ""
}


export function calculateIMC(wheight, height) {
    return(wheight / ((height / 100) ** 2)).toFixed(2)
}