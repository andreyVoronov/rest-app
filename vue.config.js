module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/rest-app/" : "/",
  outputDir: "dist",
  transpileDependencies: ["vue"],
};
