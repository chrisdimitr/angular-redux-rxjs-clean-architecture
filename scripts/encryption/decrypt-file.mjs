import * as openpgp from "@protontech/openpgp";
import { promises } from "fs";
import path from "path";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";

const yargs = _yargs(hideBin(process.argv));

if (!yargs.argv.file) {
  console.error("--file argument is missing!");
  process.exit(1);
}

if (!process.env.APP_UI_ENCRYPTION_KEY) {
  console.error("'APP_UI_ENCRYPTION_KEY' environment variable is missing!");
  process.exit(1);
}

const encryptedFilePath = path.join(process.env.INIT_CWD, yargs.argv.file);

(async () => {
  try {
    const encryptedFileData = await promises.readFile(encryptedFilePath, "utf8");

    const { data } = await openpgp.decrypt({
      message: await openpgp.readMessage({ armoredMessage: encryptedFileData }),
      passwords: [process.env.APP_UI_ENCRYPTION_KEY]
    });

    await promises.writeFile(encryptedFilePath, data);
    //writeFileSync(filePath, decryptedFileData,{encoding: "utf8", flag: "w"})
    console.log("Decryption successful!");
  } catch (error) {
    console.error("Decryption failed:", error.message || error);
  }
})();
