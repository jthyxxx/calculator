const buttons = document.querySelectorAll('.symbolButton')
const upper = document.querySelector('.upper')
const lower = document.querySelector('.lower')
const currentOpe = document.querySelector('.currentOperator')


let calculation = [];
let total = 0;
let currentNumber = 0;
let currentOperator = ""

buttons.forEach((button)=>{

    button.addEventListener('mousedown', ()=>{
        button.style.border = '3px solid #C996CC'
        button.style.fontSize = '2.8rem'
        
        if(operators.includes(button.value)){

            if(button.value === '+'){
                solve()
                set('+')
            }else if(button.value === '-'){
                solve()
                set('-')
            }else if(button.value === '×'){
                solve()
                set('×')
            }else if(button.value === '÷'){
                solve()
                set('÷')
            }else if(button.value === '='){
                solve()
                set('')
                currentNumber = 0
            }else if(button.value === '.'){
                calculation.push(button.value)
                displayUpdate()
            }else if(button.value === 'del'){
                erase()
            }else{
                eraseAll()
                    currentOpe.innerText = ""
            }

        }
        
        else{

            if(button.value === '00'){
                calculation.push('0')
            }

            calculation.push(Number(button.value))
            currentNumber = Number(calculation.join(""))
            if(currentOperator == ""){
                currentOperator = ""
            }

            displayUpdate()
        }
        
        
        
       
        
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

if(total != 0){
    lower.innerText = total
}
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
    let decimals;
    if(ind != -1){
        decimals = [...totalLength.slice(ind+1)]
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
        currentNumber = calculation.join("")
        displayUpdate()
    }
}


let eraseAll = () => {
    calculation = []
    currentNumber = 0
    total = 0
    currentOperator = ""
    setZero()
}

let setZero = () => {

    upper.innerText = 0
    lower.innerText = ""
}

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

let set = (operator) => {
    currentOperator = operator
    calculation = []
    displayUpdate()
    upper.innerText = ""
}