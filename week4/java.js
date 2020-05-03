




var num1= prompt ("Please put in the Number you want to calculate");
var num2= prompt("Please put in the percentage");
num1= Number(num1);
num2= Number(num2);
var result= (num1*num2)/100;

if (num1<=0 || num2<=0){
    document.write("The percentage or the amount couldn't be 0 or negative numbers ");
}else if (num1>0 || num2>0){
    document.write("The tip is "+ result);
} else {
    document.write("You can put in only numbers ");
}                                           