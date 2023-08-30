const paillierBigint  = require('paillier-bigint');

async function paillierTest () {
    // (asynchronous) creation of a random private, public key pair for the Paillier cryptosystem
    const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(3072)

    const ages = [12, 5, 30, 45];
    const encryptedAges = [];

    for(i=0;i<ages.length;i++){
        encryptedAges.push(publicKey.encrypt(ages[i]));
    }
  
    const encryptedSum = encryptedAges.reduce((accumulator, age) => publicKey.addition(accumulator, age));
    const numIndividuals = BigInt(encryptedAges.length);
    console.log(numIndividuals)
    const decryptSum=privateKey.decrypt(encryptedSum);
    console.log(decryptSum)
    console.log(decryptSum/numIndividuals)
  }
  paillierTest()
