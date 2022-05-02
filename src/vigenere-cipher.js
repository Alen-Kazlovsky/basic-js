const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(types) {
        this.type = types === false;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    encrypt(str, key, cipher = '') {
        if (!str || !key) throw new Error('Incorrect arguments!');
        str = str.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0, j = 0; i < str.length; i++) {
            if (this.alphabet.indexOf(str[i]) === -1) {
                cipher += str[i];
                continue;
            }
            cipher += this.alphabet[(this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key[j])) % 26];
            if (j === key.length - 1) j = 0;
            else j++;
        }
        if (this.type) return cipher.split('').reverse().join('');
        return cipher;
    }
    decrypt(str, key, decryption = '') {
        if (!str || !key) throw new Error('Incorrect arguments!');
        str = str.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0, j = 0; i < str.length; i++) {
            if (this.alphabet.indexOf(str[i]) === -1) {
                decryption += str[i];
                continue;
            }
            decryption += this.alphabet[(this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key[j]) + 26) % 26];
            if (j === key.length - 1) j = 0;
            else j++;
        }
        if (this.type) return decryption.split('').reverse().join('');
        return decryption;
    }
}

module.exports = {
    VigenereCipheringMachine
};