{
   const calculateResult = (currency, pln) => {
      const currentExchangeRateEuro = 4.62;
      const currentExchangeRateDolar = 4.21;
      switch (currency) {
         case "EUR":
            return pln / currentExchangeRateEuro;
         case "USD":
            return pln / currentExchangeRateDolar;
      }
   };

   const updateResultText = (result, currency) => {
      const resultElement = document.querySelector(".js-result");
      resultElement.innerText = `${result.toFixed(2)} ${currency}`;
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      const plnElement = document.querySelector(".js-pln");
      const currencyElement = document.querySelector(".js-currency");
      const currency = currencyElement.value
      let result = calculateResult(currency, plnElement.value);
      updateResultText(result, currency);
   };

   const init = () => {
      const formElement = document.querySelector(".js-form");
      formElement.addEventListener("submit", onFormSubmit);
   };
   init();
}