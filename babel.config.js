module.exports = {
  presets: [
    "@babel/preset-env", // responsavel para navegador entender
    "@babel/preset-react" // transformar componetes do react para o navegador entender
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
