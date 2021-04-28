const a = [17, 28, 30];
const b = [99, 16, 8];

function compareTriplets(a, b) {

  const hasil = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        hasil[0]++
    } 
    else if (a[i] < b[i]) {
        hasil[1]++
    }
  }
  return hasil
}
console.log(compareTriplets(a, b));