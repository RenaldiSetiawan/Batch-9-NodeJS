function reverse(n) {
        const reversed = n.toString().split('').reverse().join('');
        return reversed; //Fungsi RETURN adalah mengembalikan nilai
      }
      console.log(reverse(1234));