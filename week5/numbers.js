/*
1. function: argument as input (=array), return 1 array as output
2. loop
3. switch
let input-array=[];
function weekNumberstoWords(input-array){
    //use loop if you have array as inputs!
    //for each arry item, get weekday through switch
    input_array.forEach(function(weekday){
        switch(weekday){
        case 1:
            output_array.push("Monday")
        break;
    }
    });
    
    return output-array
}
let result = weekNumberstoWords(input-array);
console.log(result);
*/
/*
let input = [1,4,6,3,2];

function weekNumberstoWords(inputArray){
  let outputArray = [];
  for(let i=0; i<inputArray.length;i++){
      switch (inputArray[i]) {
          case 1:
           outputArray.push("Monday");
            break;
          case 2:
            outputArray.push("Tuesday");
            break;
          case 3:
            outputArray.push("Wednesday");
            break;
          case 4:
            outputArray.push("Thursday");
            break;
          case 5:
            outputArray.push("Friday");
            break;
          case  6:
            outputArray.push("Saturday");
            break;
            case 7:
              outputArray.push("Sunday");
        }
    }
   // use loops if you have array as inputs!
   // for each array item, get weekday through switch
  
   return outputArray;
  }
console.log(weekNumberstoWords(input));
*/

let input_array=[8,3,4,5];
let output_array=[];
let text="plaeas fdgbdfösgjdfös";

function weekNumberstoWords(input_array){
input_array.forEach(function(weekday){
    switch(weekday){
    case 1:
        output_array.push("Monday")
    break;
    case 2:
        output_array.push("Tuesday")
    break;
    case 3:
        output_array.push("wednesday")
    break;
    case 4:
        output_array.push("Thursday")
    break;
    case 5:
        output_array.push("Friday")
    break;
    case 6:
        output_array.push("Satrday")
    break;
    case 7:
        output_array.push("Sunday")
    break;
    default: 
        return text;
    
}
});
    return output_array;
}

let result = weekNumberstoWords(input_array);
console.log(result);


