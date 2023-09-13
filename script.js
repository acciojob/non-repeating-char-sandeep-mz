function firstNonRepeatedChar(str) {
    let charFrequency = {};
    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    for (let char of str) {
        if (charFrequency[char] === 1) {
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
