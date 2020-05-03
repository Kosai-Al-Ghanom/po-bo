let input = document.querySelector("input");

input.addEventListener("change",getDimensions);
function getDimensions(){
    console.log(this.files);
    let dimensions = [];
    for(let i=0; i < this.files.length;i++){
        let file= this.files[i];
        let promise =new promise((resolve,reject) =>{
            let src =window.URL.createObjectURL(file);
            let image =new Image();

            image.onload =function(){
                resolve(image.width);
                //console.log(image.width);
                //console.log(image.height);
            }

            image.src =src;
            window.URL.revokeObjectURL(src);

        });
        dimensions.push(promise);
    }   
    console.log(dimensions);
    Promise.all(dimensions).then(function(dims){
        console.log(dims);
    });
}
