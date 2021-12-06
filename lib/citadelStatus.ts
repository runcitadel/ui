import { citadel } from "./citadel";

//A helper to get applicable data needed for each page to be used inside getServerSideProps()
export const citadelStatus = () =>
  Promise.all([
    citadel.manager.ping(),
    citadel.isOnline(),
    citadel.manager.auth.isRegistered(),
    citadel.manager.auth.isTotpEnabled(),
    citadel.manager.auth.test(),
  ])
    .then(([ping, isOnline, isRegistered, isTotpEnabled, isValidJwt]) => ({
      globalState: {
        ...ping,
        isOnline,
        isRegistered,
        isTotpEnabled,
        isValidJwt,
      },
    }))
    .catch((err) => {
      console.error(err, "err in getServerSideProps..");
      return {
        props: {},
      };
    });
