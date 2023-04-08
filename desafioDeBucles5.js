/*5.Factorial Escribe código que multiplique todos los valores del 1 al 12 
en una variable producty, al final, console.logdé como resultado  1 * 2 * 3 * ... 
* 10 * 11 * 12. Deberíamos obtener  479001600al final.*/

var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);