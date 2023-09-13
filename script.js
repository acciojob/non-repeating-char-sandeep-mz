function firstNonRepeatedChar(str) {
    let charfrequency ={};
    for(let char of str){
        charfrequency[char] = (charfrequency[char] || 0)+1;
    }
    for(let char of str){
        if(charfrequency[char]===1){
            return char;
        }
    }
    return null;
    
}
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input));

