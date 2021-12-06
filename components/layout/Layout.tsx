//UTILS
import { ReactElement } from "react";
import { useLocale } from "@react-aria/i18n";

//COMPONENTS
import { Flex } from "./Flex";

export function Layout({
  children,
}: {
  children: ReactElement<any, any> | ReactElement<any, any>[];
}) {
  let { locale, direction } = useLocale();

  return (
    <Flex
      css={{
        flexDirection: "column",
        ai: "flex-start",
        jc: "flex-start",
        padding: "$6",
      }}
      lang={locale}
      dir={direction}
    >
      {/* Todo: Wrap children in layout component. Move theme toggle button off pages to here, add navigation, etc */}
      {children}
    </Flex>
  );
}
