function firstNonRepeatedChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
    alert(`The first non-repeated character is: ${result}`);
} else {
    alert("There is no non-repeated character in the given string.");
}

