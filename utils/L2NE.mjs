import alphabet from "./alphabet.mjs"
/**
 * Converts an argument into a number equivalent to the position of the character in the defined alphabet in alphabet.mjs.
 * @param {string|number} char - this will be converted or parsed into a number corresponding the passed character.
 * @returns index of the character
 */
function L2NE(char) {
    if (!isNaN(char)) {
        return char;
    } else {
        return alphabet.indexOf(char.toUpperCase());        
    }
}

export default L2NE;