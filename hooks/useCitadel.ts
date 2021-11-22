import { useState, useEffect } from "react";
import useSWR from "swr";

export default function useCitadel() {
  const [online, setOnline] = useState(false);
  const { data, error } = useSWR("/api/online");

  //Todo: throw error toaster
  if (error) console.error(error);

  return {
    baseUrl: data?.baseUrl,
    online: data?.online,
  };
}
