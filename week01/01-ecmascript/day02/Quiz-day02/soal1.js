const fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
const sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];
console.log(fruits);

// // no a 
//add new element di index terakhir array (lastindex)
fruits.push(`Anggur`, `Banana`, `Sirsak`);
console.log(fruits);

// //no b 
// Hapus element di Last Index
fruits.pop(`Sirsak`);
console.log(fruits)

// //no c
fruits.splice(0, 3, `Jeruk`, `Mangga`);
console.log(fruits)

// //no d
fruits.splice(2,3);
console.log(fruits)

// //no e
fruits.splice(2, 0, `Rambutan`, `Bengkuang`);
console.log(fruits)

// //no f
fruits.splice(4, 5, `Nangka`);
console.log(fruits)

//no g Concat – join array
let buah = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let vege = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

let join = buah.concat(vege);
// console.log(join)

//no h reverse kata dari belakang
join.reverse();
console.log(join)

//no j
function replaceMember(arrayContainer, firstParam, secondParam) {
    const firstIndex = arrayContainer.indexOf(firstParam)
    const secondIndex = arrayContainer.indexOf(secondParam)
    arrayContainer.splice(firstIndex, 1, secondParam)
    arrayContainer.splice(secondIndex, 1, firstParam)
    return arrayContainer
}
console.log(replaceMember(sehat, 'Tomat', 'Jeruk'))

function anotherReplaceMember(arrayVeg, firstParam, secondParam) {
    let firstIndex
    let secondIndex
    for (let i = 0; i < arrayVeg.length; i++) {
        if (arrayVeg[i] === firstParam) firstIndex = i
        else if(arrayVeg[i] === secondParam) secondIndex = i        
    }
    arrayVeg.splice(firstIndex, 1, secondParam)
    arrayVeg.splice(secondIndex, 1, firstParam)

    return arrayVeg
}
console.log(anotherReplaceMember(sehat, 'Jeruk', 'Tomat'))



