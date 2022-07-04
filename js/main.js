let solicitedNumber = parseInt(prompt("Hasta que numero quieres contar?"))
let numberFav = parseInt(prompt("Dime tu numero favorito dentro del rango que quieres contar"))

for (counter = 1; counter <= solicitedNumber; counter++) {
  if (counter == numberFav) {
    console.log("Este es tu numero favorito = " + numberFav)
  }
  if (counter == numberFav) {
    continue;
  }
  console.log(counter)
}