//UTILS
import { useLocale } from "@react-aria/i18n";
import { ReactElement, useState } from "react";
import useCitadel from "../../hooks/useCitadel";

//COMPONENTS
import { Flex } from "./Flex";
import { LockScreen } from "./LockScreen";

export function Layout({
  children,
  protectedRoute,
}: {
  children: ReactElement<any, any>;
  protectedRoute: boolean;
}) {
  let { locale, direction } = useLocale();
  const { isCitadel, isTotpEnabled, online } = useCitadel();

  return (
    <Flex
      css={{
        padding: "$6",
        flexDirection: "column",
        ai: "flex-start",
        jc: "space-between",
      }}
      lang={locale}
      dir={direction}
    >
      {protectedRoute && (!online || online.locked) ? (
        // We will render the Lock screen if a page is protected and the wallet is locked.
        // Export the code below to "protect" a page. Currenlty any pages which require the user to be logged in.

        // export async function getStaticProps() {
        //   return {
        //     props: {
        //       protected: true,
        //     },
        //   };
        // }
        <LockScreen />
      ) : (
        /* Todo: wrap children with layout components to be used on each page */
        children
      )}
    </Flex>
  );
}
