function randomPosition(k){
       out = ""
       for (let i = 100; i < 999; i++) {
           digit3 = Number(i/100);
           r = i %100;
           digit2 = Number(r/10);
           digit1 = r%10;
           if(digit1 === k|| digit2===k || digit3===k){
               out += i +","
           }        
       }
       return out;
    }
    
    console.log(randomPosition(7));