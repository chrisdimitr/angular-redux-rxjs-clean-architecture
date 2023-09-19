import CompressionPlugin from "compression-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

import { EAppEnvironment } from "@environments/environment.model";

const getEnvFilePerEnvironment = (): string => {
  return !process.env.APP_ENV || process.env.APP_ENV === EAppEnvironment.LOCAL ? ".env" : `.env.${process.env.APP_ENV}`;
};

module.exports = {
  output: {
    crossOriginLoading: "anonymous"
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: getEnvFilePerEnvironment(),
      systemvars: true
    }),
    new CompressionPlugin({
      // Be very carefully with 'true', sometimes bug happens
      deleteOriginalAssets: true,
      algorithm: "gzip",
      test: /\.(js|css|html)$/
    })
  ]
};
