const plaintext = 'Hello, world!';
// Convert the string to a Buffer and then to a BigInt
const plaintextBuffer = Buffer.from(plaintext, 'utf-8');
const plaintextNumeric = BigInt('0x' + plaintextBuffer.toString('hex'));

console.log(plaintextNumeric); // Output the BigInt representation