const buttons = document.querySelectorAll('button')
const upper = document.querySelector('.upper')
const lower = document.querySelector('.lower')
const currentOpe = document.querySelector('.currentOperator')


let calculation = [];
let total = 0;
let currentNumber = 0;
let currentN;
let currentOperator = ""
lower.innerText = total

let operators = ['+','-','×','÷','=','.']

let displayUpdate = () => {
    upper.innerHTML = calculation.join("")
    currentOpe.innerText = currentOperator
}

let displayTotal = () => {
    lower.innerText = total
}

let erase = () => {
    if(calculation.length <= 1){
        calculation.pop()
        upper.innerText = 0
    }else{
        calculation.pop()
        displayUpdate()
    }
}

let eraseAll = () => {
    calculation = []
}

let setZero = () => {
    upper.innerText = 0
}

buttons.forEach((button)=>{
    button.addEventListener('mousedown', ()=>{
        button.style.border = '3px solid #C996CC'
        button.style.fontSize = '2.8rem'
        
        

        if(operators.includes(button.value)){
            if(button.value === '+'){
                solve()
                currentOperator = '+'
                calculation = []
                currentNumber = 0
            }else if(button.value === '-'){
                solve()
                currentOperator = '-'
                calculation = []
                currentNumber = 0
            }else if(button.value === '×'){
                solve()
                currentOperator = '×'
                calculation = []
                currentNumber = 1
            }else if(button.value === '÷'){
                solve()
                currentOperator = '÷'
                calculation = []
                currentNumber = 1
            }else if(button.value === '='){
                solve()
                currentOperator = ""
            }else if(button.value === '.'){
                calculation.push(button.value)
            }
        }
        
        else{
            calculation.push(Number(button.value))
            currentNumber = Number(calculation.join(""))
            if(currentOperator == ""){
                currentOperator = ""
            }
        }
        
        
        
        displayUpdate()
        
    })
    
    button.addEventListener('mouseup', ()=>{
        button.style.border = 'none'
        button.style.fontSize = '2.5rem'
        
    })

    button.addEventListener('mouseleave', ()=>{
        button.style.border = 'none'
        button.style.fontSize = '2.5rem'
    })
}
)

let solve = () => {

    if(total == 0){
        total= currentNumber
        
    }else{
        if(currentOperator === '+'){
            total+= currentNumber;
        }else if(currentOperator === '-'){
            total-= currentNumber;
        }else if(currentOperator === '×'){
            total*= currentNumber
        }else if(currentOperator === '÷'){
            total/= currentNumber
        }
    }
    displayTotal()
}
