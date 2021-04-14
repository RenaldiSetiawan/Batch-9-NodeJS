const s = 'abab';


function stringConstruction(s) {

    const si = (s) ? s.length : 0;
    if(si < 1 || si > 100000) {
         return 0; 
    }
    
    const p = [];
    return s.split('').filter((el) => {
         if (p.indexOf(el) < 0) {
              p.push(el);
              return el;  
         }
    }).length;
}
console.log(stringConstruction(s));


//
