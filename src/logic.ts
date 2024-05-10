
//a) Function to split the given string 
export function splitString(input: string): string {
    return input.split("_").join(" ");
}

//b) Function to concatenate the two strings 
export function concatenateStrings(a: string, b: string): string {
    return a + b;
}

//c) Function to check leap year
// function isLeapYear checks if the given number is leap year or not which has a return type boolean.

export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// d) Secret handshake function

// flow of the function secretHandshake--
// ->create an array to store actions
// ->convert given number into binary number
// ->slice the binary number upto 5 digits
// ->using loop traverse the number and store actions in array
// -> if leftmost digit is 1 then we reverse the actions

export function secretHandshake(number: number): string[] {
    let binary: string = number.toString(2); // Convert the number to binary
    const actions: string[] = [];

    if (binary.length > 5) {
        binary = binary.slice(-5); // Consider only the rightmost 5 digits if the binary representation is longer
    }

    for (let i = 0; i < binary.length; i++) {
        if (binary[binary.length - 1 - i] === "1") {
            if (i === 0) {
                actions.push("wink");
            } else if (i === 1) {
                actions.push("double blink");
            } else if (i === 2) {
                actions.push("close your eyes");
            } else if (i === 3) {
                actions.push("jump");
            } else if (i === 4) {
                actions.reverse(); // Reverse the actions if the leftmost digit is '1'
            }
        }
    }

    return actions;
}
