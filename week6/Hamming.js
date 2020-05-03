


function hamming (str1,str2){
    if(str1.length==str2.length){
        let result=0;
        for(let i=0;i<=str1.length;i++){
            if(str1[i] != str2[i]){
            result++;
            }
        }
        return result;
    }else{
        return "Please put in equal text's length";
    }
}

console.log(hamming("absc","abjc"));