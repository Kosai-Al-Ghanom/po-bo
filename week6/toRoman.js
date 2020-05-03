
function arabicToRoman(inputNum){
    let romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let arabicNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanOutput="";
    for(let i = 0; i < arabicNum.length; i++){
        while(inputNum >= arabicNum[i]){
            romanOutput += romanNum[i];
            inputNum -= arabicNum[i];
        }
    }
    return romanOutput;
}
console.log(arabicToRoman(900));