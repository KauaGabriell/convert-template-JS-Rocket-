const USD = 5.45;
const EUR = 6.19;
const GBP = 7.36;
const form = document.querySelector("form");
const ValorDigitado = document.getElementById("amount");
const MoedaSelecionada = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
      converCurrency(amount.value, EUR, "Є");
      break;

    case "GBP":
      converCurrency(amount.value, GBP, "£");
      break;
  }
};
//Função para converter
function converCurrency(amount, price, symbol) {
  try {
    let total_price = amount * price;
    total_price = formatCurrencyBRL(total_price).replace("R$", "");
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    result.textContent = `${total_price} Reais`;

    //Mostrando footer
    footer.classList.add("show-result");
  } catch (error) {
    alert("Não foi possível converter. Tente Novamente mais tarde!!");
    footer.classList.remove("show-result");
  }
}
//Formata a moeda em REAL brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
