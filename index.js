const coffeeMenu = require("./coffee_data.js");

for(let i = 0; i < coffeeMenu.length; i++) {
    if(coffeeMenu[i].price <= 5) {
    } else if(coffeeMenu[i].price % 2 == 0) {
        console.log(`five or less  ${coffeeMenu[i].name}`);
    }

    
}

for(let i = 0; i < coffeeMenu.length; i++) {
    if(coffeeMenu[i].price % 2 == 0) {
        console.log(`even prices  ${coffeeMenu[i].name}`);
    }
}

let sum = 0;
for(let i = 0; i < coffeeMenu.length; i++) {
    sum += coffeeMenu[i].price; 
}
console.log(sum);

for(let i = 0; i < coffeeMenu.length; i++) {
    if(coffeeMenu[i].seasonal) {
        console.log(`${coffeeMenu[i].name} with imported beans`);
    }
}