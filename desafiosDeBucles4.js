/*4.Sigma Escribe código que sume todos los valores del 1 al 100 en una
variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100.
Deberíamos obtener 5050 al final.*/

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log( sum(100) );
