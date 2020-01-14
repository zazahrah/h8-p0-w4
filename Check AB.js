function checkAB(num) {
    // you can only write your code here!
    var positionA = []
    var positionB = []
    for(i=0; i<num.length; i++) {
        if(num[i] === 'a') {
            positionA.push(i)
        }
        else if(num[i] === 'b') {
            positionB.push(i)
        }
    }
    var tempArr  =[]
    for(j=0; j<positionA.length; j++) {
        for(k=0; k<positionB.length; k++) {
            var range = Math.abs(positionA[j] - positionB[k])
            tempArr.push(range)
        }
    }
    for(l=0; l<tempArr.length; l++) {
        if(tempArr[l] === 4) {
            return true
        }
    }
    return false
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false