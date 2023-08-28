const plaintext = 'Hello, world!';
// Convert the string to a Buffer and then to a BigInt
const plaintextBuffer = Buffer.from(plaintext, 'utf-8');
const plaintextNumeric = BigInt('0x' + plaintextBuffer.toString('hex'));

console.log(plaintextNumeric); // Output the BigInt representation


const plaintextHex = plaintextNumeric.toString(16); // Convert the BigInt back to hexadecimal string
const plaintextBufferRestored = Buffer.from(plaintextHex, 'hex'); // Convert the hexadecimal string back to Buffer
const restoredPlaintext = plaintextBufferRestored.toString('utf-8'); // Convert the Buffer back to plaintext string

console.log(restoredPlaintext); // Output: Hello, world!