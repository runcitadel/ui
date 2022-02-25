// eslint-disable @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
// check if we're running in a container
const isDocker = process.env.PROJECT_CWD === "/app";

module.exports = withPWA({
  pwa: {
    /*
      Disabled the service worker in the development environment to avoid this issue:
        warn  - GenerateSW has been called multiple times, perhaps due to running webpack in --watch mode. The precache manifest generated after the first call may be inaccurate!
        https://github.com/GoogleChrome/workbox/issues/1790
        
      Service worker functionality should be tested in the staging environment instead.
    */
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },
  webpackDevMiddleware: config => {
    // only use polling if running in container
    if (isDocker) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    } 
    return config
  },
});
