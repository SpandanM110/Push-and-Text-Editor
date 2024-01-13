// craco.config.js
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          "assert": require.resolve("assert/"),
          "stream": require.resolve("stream-browserify")
        }
      }
    }
  }
};
