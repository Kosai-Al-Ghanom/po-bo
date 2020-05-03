/*function transpose(original) {
    let copy = [];
    for (let i = 0; i < original.length; ++i) {
        for (let j = 0; j < original[i].length; ++j) {
                   
            if (original[i][j] === undefined) continue;
            // create row if it doesn't exist yet
            if (copy[j] === undefined) copy[j] = [];
            // swap the x and y coords for the copy
            copy[j][i] = original[i][j];
        }
    }
    return copy;
}

console.log(transpose([
    [8,2,3],
    [4,5,6],
    [7,8,9]
]));*/
let matrix=[["a","b","c"],
            ["a","b","c"],
            ["a","b","c"]];
function transoiseMatrix(array){
    let new_array =[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(new_array[j] === undefined){
                new_array[j]=[];
            }
            new_array[j][i] =array[i][j];
            console.log(array[i][j]);
        }
        
    }
    console.log(new_array);
}
transoiseMatrix(matrix);