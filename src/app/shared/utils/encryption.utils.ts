import CryptoJS from "crypto-js";

export const aesUtf8Decryptor = (ecryptedText: string, encryptionKey: string): string | null => {
  if (!ecryptedText.length || !encryptionKey.length) {
    return null;
  }

  return CryptoJS.AES.decrypt(ecryptedText, encryptionKey).toString(CryptoJS.enc.Utf8);
};
