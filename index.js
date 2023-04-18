// const rodneCislo = prompt("Zadej své rodné číslo");

// const podminka1 = rodneCislo.length === 10;
// const podminka2 = Number.isInteger(Number(rodneCislo));
// const podminka3 = rodneCislo % 11 === 0;
// podminka1
//   ? console.log("Zadané rodné číslo má správně deset znaků.")
//   : console.log("Uživatel zadal rodné číslo neplatné délky.");
// podminka2
//   ? console.log("Rodné číslo je celé číslo.")
//   : console.log("Rodné číslo obsahuje nepovolené znaky.");
// podminka3
//   ? console.log("Rodné číslo je dělitelné 11.")
//   : console.log("Rodné číslo není dělitelné číslem 11.");
// podminka1 && podminka2 && podminka3
//   ? console.log("Zadané rodné číslo je platné")
//   : console.log("Uživatel zadal neplatné rodné číslo.");

const checkBirthID = (cislo) => {
  if (cislo.length != 10) {
    return "InvalidLength";
  } else if (Number.isInteger(Number(cislo)) === false) {
    return "notANumber";
  } else if (Number(cislo) % 11 != 0) {
    return "failedCecksum";
  } else {
    return "OK";
  }
};

// const rodnaCislaKOtestovani = [
//   "123",
//   "nepovím",
//   "7060201236",
//   "7060201235",
//   "123456789123456789",
//   "9062185440",
//   "123č56q8y7",
// ];

// rodnaCislaKOtestovani.forEach(checkBirthID);
console.log(checkBirthID("8058281495"));

// const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// const isDigit = (number) => {
//   if (number.length === 1) {
//     if (digits.includes(number)) {
//       return true;
//     }
//     return false;
//   }
//   return false;
// };

// console.log(isDigit("5"));

// const logInvalidCharacters = (cisla) => {
//   const array1 = Array.from(cisla);
//   array1.forEach((invalid) => {
//     if (isDigit(invalid) === false) {
//       console.log(invalid);
//     }
//   });
// };

// console.log(logInvalidCharacters("7060201236"));

// const validateCharacters = (string) => {
//  const result = [];
//   const array = Array.from(string);
//   array.forEach((item) => {
//     const object = `{char: ${item}, digit: ${isDigit(item)}}`;
//     result.push(object);
//   });
//   return result;
// };

// validateCharacters("8554č389tz");
// console.log(result);

const formElm = document.querySelector("#form");
const rodneCisloInput = document.querySelector("#cislo");
const rodneCislo = rodneCisloInput.value;
const msgElm = document.querySelector("#message");

const tlacitko = (event) => {
  event.preventDefault();

  if (checkBirthID(rodneCislo) === "OK") {
    msgElm.textContent = "V Pořádku";
  } else {
    msgElm.textContent = "❌ V rodném čísle jsou chyby.";
  }
};

formElm.addEventListener("submit", tlacitko);
