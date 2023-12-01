import VigenereCipher from "./ciphering-methods/VigenereCipher.mjs";
import AffineCipher from "./ciphering-methods/affineCipher.mjs";
import ShiftCipher from "./ciphering-methods/shiftCipher.mjs";
let word = 'VOTE', keyC = 'D', keyA = 'DB', keyV = 'WISE'

let ciphertext = ShiftCipher.encrypt(word, keyC)
console.log(ciphertext)
console.log(ShiftCipher.decrypt(ciphertext,keyC))

ciphertext = AffineCipher.encrypt(word, keyA)
console.log(ciphertext)
console.log(AffineCipher.decrypt(ciphertext,keyA))

ciphertext = VigenereCipher.encrypt(word, keyV)
console.log(ciphertext)
console.log(VigenereCipher.decrypt(ciphertext, keyV))