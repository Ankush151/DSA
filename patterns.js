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
printSquarePattern(4);

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
        // console.log(row)
    }
}
numberTriangle(5)

// 4.   1 
//      2 2
//      3 3 3  
//      4 4 4 4 
//      5 5 5 5 5 

function numberTriangle2(n){
    for(let i = 1; i<=n; i++){
        let row = ""
        for(let j = 1; j <= i; j++){
            row+= `${i} `
        }
        // console.log(row)
    }
}
numberTriangle2(5)

// 5.   * * * * *
//      * * * *
//      * * *
//      * *
//      *   
function reverseTriangleStars(n){
    for(let i = 0; i<= n; i++){
        let row = ""
        for(let j=0; j<n-i+1; j++){
            row+="* "
        }
        // console.log(row)
    }
}
reverseTriangleStars(5)


// 6.   1 2 3 4 5
//      1 2 3 4
//      1 2 3
//      1 2
//      1

function revedrseTriangleNumbers(n){
    for(let i = 0; i <= n; i++){
        let row = ""
        for(let j = 1; j<n-i+1; j++){
            row+= `${j} `
        }
        // console.log(row)
    }
}
revedrseTriangleNumbers(5)

// 7.      *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * * 

function pyramidStars(n){
    for(let i = 0; i < n; i++){
        let row = ""

        //calculate space
        for(let j = 0; j < n-i-1; j++){
            row+= " "
        }
        //calculate star
        for(let j =0; j < 2*i+1; j++){
            row+= "*"
        }
        // //calculate space
        // for(let j = 0; j < n-i-1; j++){
        //     row+= " "
        // }

        // console.log(row)
    }
}
pyramidStars(5)


// 9. * * * * * * * * * 
//     * * * * * * *  
//       * * * * *   
//         * * *    
//           *  


function reversePyramidStars(n){
    for(let i = 0; i< n; i++){
        let row = ""
        //for space
        for(let j = 0; j < i; j++){
            row += " "
        }

        //for stars
        for(let j = 0; j < 2*n - (2*i +1); j++){
            row += "* "
        }

        for(let j = 0; j < i; j++){
            row += " "
        }    
        console.log(row)
    }
}
reversePyramidStars(5)


// 9.  * 
    // * * 
    // * * * 
    // * * * * 
    // * * * * * 
    // * * * * 
    // * * * 
    // * * 
    // * 

function rightSideTriangle(n){
    for(let i = 0; i <= 2*n-1; i++){
        let row = ""

        if(i > n){
            for(let j = 0; j < 2*n -i; j++){
                row += "* "
            }
        } 
        else {
            for(let j = 0; j < i; j++){
                row += "* "
            }
        }
        console.log(row)
    }
}
rightSideTriangle(5)
