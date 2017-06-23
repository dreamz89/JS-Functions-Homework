function isPrime(value){
  var x = true
    for(var i = 2; i < value; i++) {
        if(value%i === 0) {
          x = false;
        }
        }
  console.log(x)
    }
isPrime(51)
