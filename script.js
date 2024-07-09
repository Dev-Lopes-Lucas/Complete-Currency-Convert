const inputValue = document.querySelector(".input-value")

const currencyFrom = document.querySelector(".currency-from")

const textFor = document.querySelector(".text")

const currencyFor = document.querySelector(".currency-for")

const convertButton = document.querySelector(".convert-button")

const realValue = 1
const dolarValue = 5.4
const euroValue = 6
const dolarToEuro = 0.92



const result = document.querySelector(".result")



function buttonConvert() {

    if(currencyFrom.value == "REAL" && currencyFor.value == "REAL"){
        const finalResult = inputValue.value * 1
        const formatedValue = finalResult.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
        result.innerHTML = formatedValue

        console.log(formatedValue) 
    }

    if (currencyFrom.value == "DOLAR" && currencyFor.value == "DOLAR") {
        const finalResult = inputValue.value *1
        const formatedValue = finalResult.toLocaleString('en', {style:'currency', currency:'USD'})
        result.innerHTML = formatedValue
        console.log(formatedValue)


    }
    if (currencyFrom.value == "EURO" && currencyFor.value == "EURO") {
        const finalResult = inputValue.value * 1
        const formatedValue = finalResult.toLocaleString('eu', {style:'currency', currency:'EUR'})
        result.innerHTML = formatedValue
        console.log(formatedValue)

    }

    if (currencyFrom.value == "REAL" && currencyFor.value == "DOLAR") {
        const finalResult = inputValue.value / dolarValue
        const formatedValue = finalResult.toLocaleString('en', {style:'currency', currency:'USD'})
        result.innerHTML = formatedValue
        console.log(formatedValue)


    }
    if (currencyFrom.value == "REAL" && currencyFor.value == "EURO") {
        const finalResult = inputValue.value / euroValue
        const formatedValue = finalResult.toLocaleString('eu', {style:'currency', currency:'EUR'})
        result.innerHTML = formatedValue
        console.log(formatedValue)

    }

    if(currencyFrom.value == "DOLAR" && currencyFor.value == "REAL"){
        const finalResult = inputValue.value * dolarValue
        const formatedValue = finalResult.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
        result.innerHTML = formatedValue

        console.log(formatedValue) 
        
    }

    if(currencyFrom.value == "DOLAR" && currencyFor.value == "EURO"){
        const finalResult = inputValue.value * dolarToEuro
        const formatedValue = finalResult.toLocaleString('eu', {style:'currency', currency:'EUR'})
        result.innerHTML = formatedValue
        console.log(formatedValue) 
        
    }

    if(currencyFrom.value == "EURO" && currencyFor.value == "DOLAR"){
        const finalResult = inputValue.value / dolarToEuro
        const formatedValue = finalResult.toLocaleString('en', {style:'currency', currency:'USD'})
        result.innerHTML = formatedValue
        console.log(formatedValue) 
        
    }

    if(currencyFrom.value == "EURO" && currencyFor.value == "REAL"){
        const finalResult = inputValue.value * euroValue
        const formatedValue = finalResult.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
        result.innerHTML = formatedValue
        console.log(formatedValue) 
        
    }
}


//console.log(currencyFor.options[2].value)






/*
if(currencyFrom.value == "REAL" && currencyFor.value == "EURO"){

    inputValue = inputValue.value / euroValue

    console.log(inputValue.value)


}


*/


convertButton.addEventListener("click", buttonConvert)





