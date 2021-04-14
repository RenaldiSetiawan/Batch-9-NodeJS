function countWord(s){
       let count =0;
       for (let i = 0; i < s.length; i++) {
           if(s[i] === " " || i===s.length-1){ // [] array 
               count++;
           }
           
       }
       return count; //Fungsi RETURN adalah mengembalikan nilai
    } 
    
    console.log(countWord("aku suka javascript"));