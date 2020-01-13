function cariMedian(arr) {
    // you can only write your code here!
        if(arr.length % 2 == 0) {
            var sisa = arr.length / 2
            let median = (arr[sisa] + arr[sisa-1]) / 2
            return median
        }
        else {
            median = (arr.length -1)/2
            return arr[median]
        }
}
  
//   TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5