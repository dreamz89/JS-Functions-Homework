var arr1 = [3,6,11]
var arr2 = [2,4,5,8,9]

function merge(array1,array2){
  var merged = array1.concat(array2)
  var sorted = merged.sort(function(a, b){return a-b});
  return sorted
}

merge(arr1,arr2)
