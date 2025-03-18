const makeChange = (c) => {
    c = parseInt(c); // Convert input to an integer

    return {
        q: Math.floor(c / 25), // Number of quarters
        d: Math.floor((c % 25) / 10), // Number of dimes
        n: Math.floor((c % 25 % 10) / 5), // Number of nickels
        p: Math.floor(c % 25 % 10 % 5) // Number of pennies
    };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
