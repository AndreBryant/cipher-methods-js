import ShiftCipher from "./ciphering-methods/shiftCipher.mjs";
import alphabet from "./utils/alphabet.mjs";
let cipherText = "text here";

for (let key = 1; key < alphabet.length; key++) {
  let plaintext = ShiftCipher.decrypt(cipherText, key);
  console.log("key", key);
  console.log(plaintext);
}
