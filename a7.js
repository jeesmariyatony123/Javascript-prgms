//Print common numbers from the given two arrays = 11,20,30
array1 = [10, 11, 12, 20, 30]
array2 = [11, 20, 21, 30, 31]

// for (i = 0; i < array1.length; i++) { 
//     for (j = 0; j < array2.length; j++) {
//         if(array1[i]===array2[j]){
//             console.log(`${array1[i]}`);
//         }
//     }
//}

for (let a of array1) {
    for (let b of array2) {
        if (a === b) {
            console.log(a);
            break;
        }
    }
}