import imagemin from "imagemin-overwrite";
import imageminJpegtran from "imagemin-jpegtran";
import imageminOptipng from "imagemin-optipng";
import { readdirSync } from "fs";

const getAssetImagesDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => buildPath + dirent.name + "/*.{jpg,png}");

const buildPath = "dist/angular-redux-rxjs-clean-architecture/assets/images/";

(async () => {
  const files = await imagemin(getAssetImagesDirectories(buildPath), {
    plugins: [
      //imageminWebp({ quality: 75 }),
      imageminJpegtran({ progressive: true }),
      imageminOptipng({
        optimizationLevel: 6
      })
    ]
  });

  console.log(files);
  console.log("Asset images compressed successfully!");
})();
