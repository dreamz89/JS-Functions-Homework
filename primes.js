function isPrime(value){
    for(var i = 2; i < value; i++) {
      if(value%i === 0) {
          return false;
      }
    }
  return true
  }

function primes(int){
  var array = []
    for(var i = 2; i <= int; i++) {
      if (isPrime(i)){
        array.push(i)
      }
    }
    console.log(array)
}

primes(53)
