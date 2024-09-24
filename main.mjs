import ShiftCipher from "./ciphering-methods/shiftCipher.mjs";
import AffineCipher from "./ciphering-methods/affineCipher.mjs";
import VigenereCipher from "./ciphering-methods/VigenereCipher.mjs";
import alphabet from "./utils/alphabet.mjs";
import fs from "fs";

let cipherText = `exm mahlx pah tkx bg ytohk pbma maxbk lmtkl
hy inuebv ahghk tgw ikhnw mbmexl uhtlm
pabelm b, pahf yhkmngx hy lnva mkbnfia utkl
ngehhdxw yhk chr bg matm b ahghk fhlm
zkxtm ikbgvxl’ ytohkbmxl maxbk ytbk extoxl likxtw
unm tl max ftkbzhew tm max lng’l xrx
tgw bg maxflxeoxl maxbk ikbwx ebxl unkbèw
yhk tm t ykhpg maxr bg maxbk zehkr wbx
max itbgyne ptkkbhk ytfhnlèw yhk phkma
tymxk t mahnltgw obvmhkbxl hgvx yhbexw
bl ykhf max uhhd hy ahghk ktsèw jnbmx
tgw tee max kxlm yhkzhm yhk pabva ax mhbexw
maxg atiir b, matm ehox tgw tf uxehoxw
paxkx b ftr ghm kxfhox ghk ux kxfhoxw
`;

// shift brute force
for (let key = 1; key < alphabet.length; key++) {
  let plaintext = ShiftCipher.decrypt(cipherText, key);
  console.log("key", key);
  console.log(plaintext);
}

// affine brute force
// for (let key1 = 0; key1 < alphabet.length; key1++) {
//   for (let key2 = 0; key2 < alphabet.length; key2++) {
//     let key = "" + alphabet[key1] + alphabet[key2];
//     console.log(key);
//     let plaintext =
//       `Key: ${key}
//     ` +
//       AffineCipher.decrypt(cipherText, key) +
//       `
// `;

// if (!plaintext.includes("undefined")) {
//   fs.appendFileSync("./output.txt", plaintext, (err) => {
//     if (err) console.error(err);
//     console.log("appended text for key:", key);
//   });
// }
//   }
// }

// // vigenere
// for (let key = 1; key < alphabet.length; key++) {
//   let plaintext = ShiftCipher.decrypt(cipherText, key);
//   console.log("key", key);
//   console.log(plaintext);
// }
