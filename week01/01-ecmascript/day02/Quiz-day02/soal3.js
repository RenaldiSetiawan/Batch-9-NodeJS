// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// /**
//  * Array filters items based on search criteria (query)
//  */
// function filterItems(query) {
//   return fruits.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

//=================================================================================

// let product = ['LG', 'Monitor', 'Asus', 'Laptop', '5432', 'Mix', 'For', 'Youtuber',
// 'Bluetooth', 'Adapter', 'Solo', 'Leveling', 'Webtoon', 'Panasoni', 'Air',
// 'Conditioner', 'Karaoke', 'Bazooka', 'PowerBank', '24', 'Hours',
// 'Backpack', 'of', 'Holding', 'Game', 'Box', '5', 'Universal', 'Gadget',
// 'Charger', 'USB', 'Squirming', 'Tentacle', 'USB', 'Fishquarium', 'Intel',
// 'Processor', '8', 'core', 'Space', 'Bar', 'Keyboard', 'Organizer', '&',
// 'USB', 'Hub', 'Pop', 'USB', 'Pet', 'Rock', 'Powerstation', '5', 'Dual',
// 'Heated', 'Travel', 'Mug', 'Crosley', 'Collegiate', 'Portable', 'USB',
// 'Turntable', 'Hoodie', 'AK-47'];

// /**
//  * Array filters items based on search criteria (query)
//  */
// function tampilProduk(query) {
//   return product.filter(function(el) {
//       return el.toUpperCase().indexOf(query.toUpperCase()) > -1;
//   })
// }

// console.log(tampilProduk("A", product));
// console.log(tampilProduk("S", product)); 

const array = ['LG', 'Monitor', 'Asus', 'Laptop', '5432', 'Mix', 'For', 'Youtuber','Bluetooth', 'Adapter', 'Solo', 'Leveling', 'Webtoon', 'Panasoni', 'Air',
'Conditioner', 'Karaoke', 'Bazooka', 'PowerBank', '24', 'Hours',
'Backpack', 'of', 'Holding', 'Game', 'Box', '5', 'Universal', 'Gadget',
'Charger', 'USB', 'Squirming', 'Tentacle', 'USB', 'Fishquarium', 'Intel',
'Processor', '8', 'core', 'Space', 'Bar', 'Keyboard', 'Organizer', '&',
'USB', 'Hub', 'Pop', 'USB', 'Pet', 'Rock', 'Powerstation', '5', 'Dual',
'Heated', 'Travel', 'Mug', 'Crosley', 'Collegiate', 'Portable', 'USB',
'Turntable', 'Hoodie', 'AK-47'];

function filterProducts(keyword, array){
    let barang = "";
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        barang = array[i]
        if (array[i].startWith(keyword)) {
            arr.push(arry[i])
        }
        
    }
return arr
}
console.log(filterProducts("A", array))