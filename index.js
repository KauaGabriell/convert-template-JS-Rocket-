const USD = 5;
const EUR = 6;
const GBP = 7;
const form = document.querySelector("form");
const ValorDigitado = document.getElementById("amount");
const MoedaSelecionada = document.getElementById("currency");

//Manipulando input para receber apenas números
ValorDigitado.addEventListener("input", () => {
  const RegexHasCharacter = /\D+/g;
  amount.value = amount.value.replace(RegexHasCharacter, "");
});

//Capturando Moeda Selecionada
form.onsubmit = (event) => {
  event.preventDefault();

  switch (MoedaSelecionada.value) {
    case "USD":
      converCurrency(amount.value, USD, "US$");
      break;

    case "EUR":
      converCurrency(amount.value, EUR, "Є'");
      break

    case "GBP":
      converCurrency(amount.value, GBP, "£");
      break
  }
};
//Função para converter
function converCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}

