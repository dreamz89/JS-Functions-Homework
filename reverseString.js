function reverseString(input){
  var arrayOfStrings = input.split('');
  var reversed = arrayOfStrings.reverse().join('').toString();
  console.log(reversed)
}

reverseString('reverse string')
