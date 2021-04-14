function negation(n){
       let out = ""
       let counter=0;
       for (let i = 1; i <= n; i++) {
           if (counter <= n){
               out += (i *-1)+","+i +","
               counter++;
           }
       }
       return out;
    }
    console.log(negation(25))