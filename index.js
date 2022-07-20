//defining methods
class Calculator{
    constructor(previousOutputElement, currentOutputElement){
        this.previousOutputElement = previousOutputElement
        this.currentOutputElement = currentOutputElement
        this.clear()
    }
    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }
    delete(){

    }
    appendNumber(number){
        this.currentOperand = number        
    }
    chooseOperand(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOutputElement.innerText = this.currentOperand        
    }
}

//variables
const numberButtons = document.querySelector('[data-number]')
const operandButtons = document.querySelector('[data-operand]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOutputElement = document.querySelector('[data-previous-output]')
const currentOutputElement = document.querySelector('[data-current-output]')

const calculator = new Calculator(previousOutputElement, currentOutputElement)

Array.from(numberButtons).forEach(function(button) {
    button.addEventListener('click', ()=>{        
        calculator.appendNumber(button.innerText)        
        calculator.updateDisplay()
    })
})


