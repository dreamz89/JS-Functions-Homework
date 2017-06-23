function sillySum(arr){
  var count = 0
  for (var i = 0; i < arr.length; i++){
  count += (arr[i] * i)
  }
  console.log(count)
}

sillySum([1,2,3,4])
