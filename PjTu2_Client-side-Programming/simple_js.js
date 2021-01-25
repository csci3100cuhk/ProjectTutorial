// Code list: <open the JS console and input the following codes>
// variable
var netWeight = 0;
netWeight += 1;

var netPrice;
netPrice = 1;
//Operation
netPrice++;
var price = "Price: " + netPrice;


//Function
function sayHello() {
    console.log("Hello");
}


//Array
var fruit = new Array("apple", "lemon", "banana");
var color = ["red", "green", "blue"]        // the same to first definition, but shorter.


for (index in color) {
    console.log(color[index]);
}

// Loop
for (var i = 0; i < 5; i++) {
    console.log("count " + i);
}