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

let operators = ['+','-','×','÷','=','.','del','allclear']

let displayUpdate = () => {
    if(calculation.length > 17){
        upper.innerText = (Number(calculation.join(""))).toExponential(2)
    }
    else{
        upper.innerText = calculation.join("")
    }
    currentOpe.innerText = currentOperator
}

let displayTotal = () => {
    let totalLength = Array.from(total.toString())
    let ind = totalLength.indexOf('.')
    let decimals = [...totalLength.slice(ind+1)]
    if(decimals.length >= 3){
        if(totalLength.length > 17){
            lower.innerText = total.toExponential(2)
        }
        else{
            lower.innerText = total.toFixed(2)
        }
    }else{
        if(totalLength.length > 17){
            lower.innerText = total.toExponential(2)
        }
        else{
            lower.innerText = total
        }
    }
    
}

let erase = () => {
    if(calculation.length <= 1){
        calculation.pop()
        upper.innerText = 0
    }else{
        calculation.pop()
        currentNumber = Number(calculation.join(""))
        displayUpdate()
    }
}

let eraseAll = () => {
    calculation = []
    currentNumber = 0
    total = 0
    setZero()
}

let setZero = () => {
    upper.innerText = 0
    lower.innerText = 0
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
            }else if(button.value === 'del'){
                erase()
            }else if(button.value === 'allclear'){
                eraseAll()
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
