const crypto = require("crypto");

const secret = "f1nd1ng_s3cr3t_k3y";
const key = crypto.scryptSync(secret, 'salt', 32);

const encrypt = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", key, iv);
  const encryptedPassword = Buffer.concat([cipher.update(password), cipher.final()]);

  return { iv: iv.toString("hex"), password: encryptedPassword.toString("hex") };
};

const decrypt = (encryption) => {
  const decipher = crypto.createDecipheriv("aes-256-ctr", key, Buffer.from(encryption.iv, "hex"));
  const decryptedPassword = Buffer.concat([decipher.update(Buffer.from(encryption.password, "hex")), decipher.final()]);

  return decryptedPassword.toString();
};

module.exports = { encrypt, decrypt };