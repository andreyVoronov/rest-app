module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/rest-app/" : "/",
  outputDir: "public", // Указываем путь сборки, чтобы приложение сохранялось в папку public
  transpileDependencies: ["vue"],
};
