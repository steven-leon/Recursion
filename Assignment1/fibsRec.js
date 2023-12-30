// function fibsRec (n){
//   let fibSequence = [0, 1];
//     if (n <= 1) {
//         return n;
//       } else {
//         return fibsRec(n - 1) + fibsRec(n - 2);
//       }
// }

function fibsRec (n){
  let fibSequence = [];

  function calculateFib(index) {
    if (index <= 1) {
      return index;
    } else {
      let fibNMinus1 = calculateFib(index - 1);
      let fibNMinus2 = calculateFib(index - 2);
      return fibNMinus1 + fibNMinus2;
    }
  }

  for (let i = 0; i < n; i++) {
    fibSequence.push(calculateFib(i));
  }

  return fibSequence;

}

let resultado = fibsRec(8);
console.log(resultado);