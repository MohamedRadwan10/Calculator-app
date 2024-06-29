var allBtns = document.querySelectorAll(".numbers button")
var display = document.querySelector(".result")
let button1 = document.querySelector("#btn1")
let button2 = document.querySelector("#btn2")
let button3 = document.querySelector("#btn3")
let main = document.querySelector(".calculator-app")
let totalNum = 0
let operator = ''
let prevOperator = ''

allBtns.forEach(function(item){
    item.addEventListener('click', function(event){
        if(item.getAttribute('calc') === 'del'){
            const string = display.innerHTML
            display.innerHTML = string.slice(0, -1);
        }else if(item.getAttribute('calc') === 'reset'){
            display.innerHTML = ''
            totalNum = 0
            operator = ''
            prevOperator = ''
        }else if(item.getAttribute('calc') === '='){
            let result = eval(display.innerHTML)
            display.innerHTML = result
            totalNum = 0
            operator = ''
            prevOperator = ''
        }else if(item.getAttribute('calc') === '+'){
            display.innerHTML += '+'
            prevOperator = operator
            operator = '+'
        }else if(item.getAttribute('calc') === '-'){
            display.innerHTML += '-'
            prevOperator = operator
            operator = '-'
        }else if(item.getAttribute('calc') === 'x'){
            display.innerHTML += '*'
            prevOperator = operator
            operator = '*'
        }else if(item.getAttribute('calc') === '/'){
            display.innerHTML += '/'
            prevOperator = operator
            operator = '/'
        }else{
            display.innerHTML += item.textContent
            if(prevOperator === '+'){
                totalNum += +(item.textContent)
            }else if(prevOperator === '-'){
                totalNum -= +(item.textContent)
            }else if(prevOperator === '*'){
                totalNum *= +(item.textContent)
            }else if(prevOperator === '/'){
                totalNum /= +(item.textContent)
            }else{
                totalNum = +(item.textContent)
            }
        }
    })
})
button1.addEventListener('click', function(){
    main.setAttribute('background', 'default')
})
button2.addEventListener('click', function(e){
    main.setAttribute('background', 'light')
})
button3.addEventListener('click', function(){
    main.setAttribute('background', 'dark')
})
