function fibs (n){

    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
      }

      return fibSequence;
}

console.log(fibs(8))