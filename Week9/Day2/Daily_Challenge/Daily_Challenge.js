let client = "Betty";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "35$",
    other: {
        paid: false,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object.Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit))
};

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)

const cloneGroceries = () => {
    let user = client
    let shopping = groceries
    console.log(user)
    console.log(shopping.totalPrice)
    console.log(shopping.other.paid)

};


// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//     In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$.Will we also see this modification in the shopping object ? Why ? We'll see this and all changes in the shopping object because the object's value is passed by reference. We now have two variables pointing to the same spot in memory so all changes to the object will show up in the variables that point to it.
//     Change the value of the paid key to false.Will we also see this modification in the shopping object ? Why ? Copy/pasted from above... We'll see this and all changes in the shopping object because the object's value is passed by reference. We now have two variables pointing to the same spot in memory so all changes to the object will show up in the variables that point to it.
//         Invoke the cloneGroceries function.
