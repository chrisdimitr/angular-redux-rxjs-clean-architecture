import CryptoJS from "crypto-js";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";

const yargs = _yargs(hideBin(process.argv))

if (!yargs.argv.file) {
  console.error("--file argument is missing!");
  process.exit(1);
}

if (!process.env.APP_UI_ENCRYPTION_KEY) {
  console.error("'APP_UI_ENCRYPTION_KEY' environment variable is missing!");
  process.exit(1);
}

const filePath = path.join(process.env.INIT_CWD, yargs.argv.file);
const fileData = readFileSync(filePath, "utf8");
const encryptedFileData = CryptoJS.AES.encrypt(fileData, process.env.APP_UI_ENCRYPTION_KEY).toString();
writeFileSync(filePath, encryptedFileData,{encoding: "utf8", flag: "w"});
