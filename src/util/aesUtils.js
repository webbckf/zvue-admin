/**
 * 工具类
 */
import CryptoJS from 'crypto-js'
const key = CryptoJS.enc.Latin1.parse('mpmsmpmsmpmsmpms') // 十六位十六进制数作为密钥
const iv = key
export default {
  // 加密
  encrypt (word) {
    // let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let decryptS = CryptoJS.AES.encrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding })
    return decryptS.toString()
  },
  // 解密
  decrypt (word) {
    // let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.decrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding })
    return CryptoJS.enc.Utf8.stringify(encrypted).toString()
  }
}
