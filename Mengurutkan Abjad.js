function urutkanAbjad(str) {
    // you can only write your code here!

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newString = ''
    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j] === alphabet[i]) {
                newString += str[j]
            }
        }
    }
    return newString
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis