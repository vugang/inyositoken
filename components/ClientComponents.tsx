// components/ClientComponent.tsx

import { createThirdwebClient } from "thirdweb";

export function ClientComponent() {
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
  });

  return client;
}
