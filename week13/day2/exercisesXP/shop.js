const products = require("./products.js");

function findProduct(itemName) {
    const product = products.find(product => product.name.toLowerCase() === itemName.toLowerCase());
    if (product) {
        console.log(`item: ${product.name}, ${product.price}, ${product.category}`);
    } else {
        console.log('item not found');
    }
};

findProduct('jeans')