function listProduct(products) {
    let prefix = ""
    for (let i = 0; i < 26; i++) {
        prefix = (10+i).toString(36).toUpperCase()
        console.log(`===${prefix}===`)
        for (let j = 0; j < products.length; j++) {
            if (products[j].startsWith(prefix)) console.log(products[j])
        }
        console.log("")
        
    }
}
listProduct(productsArray)