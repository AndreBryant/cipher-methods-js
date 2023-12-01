import L2NE from "../utils/L2NE.mjs";
import ShiftCipher from "./shiftCipher.mjs";

const VigenereCipher = {
    encrypt: 
        /**
         * This function encrypts strings using the Vigenere Cipher Method.
         * @param {string} string - the string to be encrypted.
         * @param {string} key - the key that will be used in the encryption.
         * @returns {string} cipherText - the encrypted text.
        */
    function(string, key){
        
        string = Array.from(string);
        key = Array.from(key);

        let cipherText = '';

        let index = 0;
        string.forEach(e => {
            const K = L2NE(key[index]);
            index = (index + 1) % key.length;
            cipherText += ShiftCipher.encrypt(e, K);
        });
        
        return cipherText;
    },
    decrypt: 
        /**
         * This function decrypts strings using the Vigenere Cipher Method.
         * @param {string} string - the string to be decrypted.
         * @param {string} key - the key that will be used in the decryption.
         * @returns {string} cipherText - the decrypted text.
        */
    function(string, key){
        
        string = Array.from(string);
        key = Array.from(key);

        let plainText = '';

        let index = 0;
        string.forEach(e => {
            const K = L2NE(key[index]);
            index = (index + 1) % key.length;
            plainText += ShiftCipher.decrypt(e, K);
        });
        
        return plainText;
    }
}

export default VigenereCipher;