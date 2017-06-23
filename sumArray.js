function sumArray(arr){
  var sum = 0
  for (var i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  console.log(sum)
}

function multiplyArray(ray){
  var multiply = 1
  for (var i = 0; i < ray.length; i++){
    multiply = multiply * ray[i]
  }
  console.log(multiply)
}

sumArray([1,2,3,4])
multiplyArray([1,2,3,4])
