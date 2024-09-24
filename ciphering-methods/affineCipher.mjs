import L2NE from "../utils/L2NE.mjs";
import alphabet from "../utils/alphabet.mjs";

const AffineCipher = {
  encrypt:
    /**
     * This function encrypts strings using the Affine Cipher Method.
     * @param {string} string - the string to be encrypted.
     * @param {string} key - the key that will be used in the encryption.
     * @returns {string} cipherText - the encrypted text.
     */
    function (string, key) {
      let a = L2NE(key.charAt(0)),
        b = L2NE(key.charAt(1));

      string = string.toUpperCase().split("");

      let cipherText = "";

      string.forEach((e) => {
        let C = alphabet.indexOf(e);
        let P = (a * C + b) % alphabet.length;
        while (P < 0) {
          P += alphabet.length;
        }

        cipherText += alphabet[P];
      });

      return cipherText;
    },
  decrypt:
    /**
     * This function decrypts strings using the Affine Cipher Method.
     * @param {string} string - the string to be decrypted.
     * @param {string} key - the key that will be used in the decryption.
     * @returns {string} cipherText - the decrypted text.
     */
    function (string, key) {
      let a = L2NE(key.charAt(0)),
        b = L2NE(key.charAt(1));

      string = string.toUpperCase().split("");

      let plainText = "";
      let a_inv = modInverse(a, alphabet.length);

      string.forEach((e) => {
        let P = alphabet.indexOf(e);
        if (P !== -1) {
          let C = (a_inv * (P - b)) % alphabet.length;
          while (C < 0) {
            C += alphabet.length;
          }
          plainText += alphabet[C];
        } else {
          plainText += e;
        }
      });

      return plainText;
    },
};

function modInverse(a, m) {
  for (let x = 1; x < m; x++) {
    if (((a % m) * (x % m)) % m === 1) {
      return x;
    }
  }
}

export default AffineCipher;
