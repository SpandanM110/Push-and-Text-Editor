// config-overrides.js
const { override, fallback } = require('customize-cra');

module.exports = override(
  fallback({
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "zlib": require.resolve("browserify-zlib")
  })
);
