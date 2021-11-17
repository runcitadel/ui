// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
