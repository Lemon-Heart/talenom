module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/variables.sass"`
      }
    }
  }
}