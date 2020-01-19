function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    var array = []
    for (var i=0; i<arrPenumpang.length; i++) {
        var object = {}
        object.penumpang = arrPenumpang[i][0]
        object.naikDari = arrPenumpang[i][1]
        object.tujuan = arrPenumpang[i][2]
        object.bayar = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]))*2000

        array.push(object)
    }
    return array
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]