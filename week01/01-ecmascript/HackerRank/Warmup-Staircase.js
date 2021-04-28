function staircase(n) {
    
    for(let i = 0; i < n; i++){
        let output = '';
        for(let j = 0; j < n; j++){
        j < (n -1 -i) ? output += ' ': output += '#';
        }
     console.log(output);
    }
}
