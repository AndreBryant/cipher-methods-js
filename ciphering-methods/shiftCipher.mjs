import L2NE from "../utils/L2NE.mjs";
import alphabet from "../utils/alphabet.mjs";

const ShiftCipher = {
  encrypt:
    /**
     * This function encrypts strings using the Shift Cipher Method.
     * @param {string} string - the string to be encrypted.
     * @param {string} key - the key that will be used in the encryption.
     * @returns {string|number} cipherText - the encrypted text.
     */
    function (string, key) {
      key = L2NE(key);
      string = string.toUpperCase().split("");
      let cipherText = "";

      string.forEach((e) => {
        let C = alphabet.indexOf(e);
        let P = (C + key) % alphabet.length;
        cipherText += alphabet[P];
      });

      return cipherText;
    },
  decrypt:
    /**
     * This function decrypts strings using the Shift Cipher Method.
     * @param {string} string - the string to be decrypted.
     * @param {string|number} key - the key that will be used in the decryption.
     * @returns {string} cipherText - the decrypted text.
     */
    function (string, key) {
      key = L2NE(key);
      string = string.toUpperCase().split("");
      let plainText = "";

      string.forEach((e) => {
        let P = alphabet.indexOf(e);
        if (P !== -1) {
          let C = (P - key + alphabet.length) % alphabet.length;
          plainText += alphabet[C];
        } else {
          plainText += e;
        }
      });

      return plainText;
    },
};

export default ShiftCipher;
