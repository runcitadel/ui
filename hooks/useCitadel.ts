import { useState } from "react";
import useSWR from "swr";

export default function useCitadel() {
  const { data: isTotpEnabled, error: isTotpEnabledError } =
    useSWR("/api/isTotpEnabled");
  const { data: isOnline, error: isOnlineError } = useSWR("/api/isOnline");
  const { data: isCitadel, error: isCitadelError } = useSWR("/api/isCitadel");

  console.log(isTotpEnabled, "data");
  console.log(isOnline, "isOnline");
  console.log(isCitadel, "isCitadel");

  //Todo: throw error toaster
  if (isTotpEnabledError || isOnlineError || isCitadelError)
    console.error(isTotpEnabledError, isOnlineError, isCitadelError, "error");

  return {
    baseUrl: isOnline?.baseUrl,
    online: isOnline?.online,
    isTotpEnabled,
    isCitadel,
  };
}
