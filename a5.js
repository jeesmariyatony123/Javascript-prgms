//print duplicate numbers in the given array =10,20
numArray = [10, 20, 10, 20, 11, 12]

console.log("Duplicate numners in array");
for (i = 0; i < numArray.length; i++) { //first no  i=0,1,2
    for (j = i + 1; j < numArray.length; j++) { //except first number  j=1,j=2
        if (numArray[i] === numArray[j]) {  //10==20 f,10===10
            console.log(numArray[i]); //10
            break;
        }
    }
}
