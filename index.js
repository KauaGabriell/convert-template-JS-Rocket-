const USD = 5
const EUR = 6
const GBP = 7
const form = document.querySelector("form")
const ValorDigitado = document.getElementById("amount")
const MoedaSelecionada = document.getElementById("currency")
//Manipulando input para receber apenas números
ValorDigitado.addEventListener("input", ()=>{
    const RegexHasCharacter = /\D+/g
    amount.value = amount.value.replace(RegexHasCharacter, "")
})
//Capturando Moeda Selecionada
form.onsubmit = (event) =>{
   event.preventDefault()
   
   switch(convertCurrency.value){
    case "USD":
        convertCurrency(amount.value, dolar, symbol)
   }
   
}

//Função para converter
function convertCurrency(amount, price, symbol){

}