function generateBinaryString() {
    var binaryString = "";
    var length = Math.floor(Math.random() * 8) + 1;
    
    for (var i = 0; i < length; i++) {
      binaryString += Math.round(Math.random()).toString();
    }
    
    return binaryString;
}
console.log(generateBinaryString());
function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2);
  }
  console.log(binaryToDecimal(generatedBinaryString));
  function binaryToDecimal(binaryString) {
    return binaryString.split('').reduce(function(acc, curr, i){
      return acc + parseInt(curr) * Math.pow(2, binaryString.length - i - 1);
    }, 0)
  }
  console.log(binaryToDecimal(generatedBinaryString));
    
  