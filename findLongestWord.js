function findLongestWord(array){
  var longest = ''
for (var i=0; i<array.length;i++){
  if (array[i].length > longest.length){
    longest = array[i]
  }
}
console.log(longest)
}

findLongestWord(['Write', 'a', 'function', 'that', 'takes', 'an', 'array', 'of', 'words'])
