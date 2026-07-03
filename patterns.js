// Write logic to print patterns 

// 1.   ****
//      ****
//      ****
//      ****

function printSquarePattern(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j < n; j++) {
            row+= "*";
        }
        console.log(row);
    }
}
await printSquarePattern(4);