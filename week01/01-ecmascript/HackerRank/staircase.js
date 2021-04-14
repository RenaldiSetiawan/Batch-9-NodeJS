let n = [6];

function staircase(n) {
    
    // Two dimensional array concept
    for(let i = 0; i < n; i++){
        // Clear the output after each loop
        let output = '';
        for(let j = 0; j < n; j++){
          // Loop through, whenever (n-1-i) is bigger than j concat a space else #
           j < (n -1 -i) ? output += ' ': output += '#';
        }
        return output;
    }
}
console.log(staircase(n));