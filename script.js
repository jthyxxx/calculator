const buttons = document.querySelectorAll('button')
const upper = document.querySelector('.upper')
const lower = document.querySelector('.lower')

let calculation = [];
let total = 0;

lower.innerText = total

buttons.forEach((button)=>{
    button.addEventListener('mousedown', ()=>{
        button.style.border = '3px solid #C996CC'
        button.style.fontSize = '2.8rem'
        
        if(button.value === 'del'){
            erase()
            displayUpdate()
        }else if(button.value === 'allclear'){
            calculation = []
            setZero()
        }else if(button.value === '+'){

        }
        else{
            calculation.push(Number(button.value))
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

let displayUpdate = () => {
    upper.innerHTML = calculation.join("")
}

let displayTotal = () => {
    lower.innerText = total
}

let erase = () => {
    calculation.pop()
}

let setZero = () => {
    upper.innerHTML = '0'
}