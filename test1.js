const paillierBigint  = require('paillier-bigint');

async function paillierTest () {
    // (asynchronous) creation of a random private, public key pair for the Paillier cryptosystem
    const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(3072)
  
    // Optionally, you can create your public/private keys from known parameters
    // const publicKey = new paillierBigint.PublicKey(n, g)
    // const privateKey = new paillierBigint.PrivateKey(lambda, mu, publicKey)
  
    const m1 = 12345678901234567890n
    const m2 = 5n
  
    // encryption/decryption
    const c1 = publicKey.encrypt(m1).toString();
    console.log(privateKey.decrypt(BigInt(c1))) // 12345678901234567890n
  
    
  }
  paillierTest()
