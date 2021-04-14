function isPalindrome(s) {
        const lowerString = s.toLowerCase();
        const characters = lowerString.replace(/[\W_]/g, '');
        const len = characters.length;
    
        for (var i = 0; i < len / 2; i++) {
           if (characters[i] !== characters[len - 1 - i]) return false;
        }
        return true;
      }
      console.log(isPalindrome('Kasur ini ruSak')); // true
    