// Write logic to print patterns 

// 1.   * * * *
//      * * * *
//      * * * *
//      * * * *

function printSquarePattern(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j < n; j++) {
            row+= "* ";
        }
        // console.log(row);
    }
}
await printSquarePattern(4);

// 2.   *
//      * *
//      * * *
//      * * * *
//      * * * * *

function printTriangle(n){
    for(let i = 0; i< n; i++){
        let row = ""
        for(let j = 0; j <= i; j++){
            row+= "* "
        }
        // console.log(row)
    }
}
printTriangle(5)


// 3.   1 
//      1 2 
//      1 2 3 
//      1 2 3 4 
//      1 2 3 4 5 

function numberTriangle(n){
    for(let i = 1; i<=n; i++){
        let row = ""
        for(let  j = 1; j <= i; j++){
            row+= `${j} `
        }
        console.log(row)
    }
}
numberTriangle(5)