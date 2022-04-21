const formElement = document.querySelector("form");
// const formElementsArray = Array.from(formElement.elements);

formElement.addEventListener("submit", e => {
  e.preventDefault();
  const name1 = e.target.elements.name.value;
  const email1 = e.target.elements.email.value;
  const payment1 = e.target.elements.payment.value;
  if(e.target.elements.promo.checked){
    promotion1 = "on";}else{
    promotion1 = "off";}
  const location1 = e.target.elements.location.value;
  const keyArray = ["name", "email", "payment", "promotion", "location"];
  const valueArray = [name1, email1, payment1, promotion1, location1];

  for(i = 0; i < 6; i++){
    trElement = document.createElement("tr");
    for(c = 0; c < 2; c++){
      tdElement = document.createElement("td");
      if(i===0){
        if(r===0){tdElement.textContent = "Key"}else{tdElement.textContent = "Value"}
        tdElement.classList.add("bgGray");}
      else{
        if(r===0){tdElement.textContent = keyArray[i-1]}else{tdElement.textContent = valueArray[i-1];}}
      trElement.appendChild(tdElement);
    }
    document.getElementById("output").appendChild(trElement);
  }

})