// pages/_app.tsx
import type { AppProps } from "next/app"; // ✅ Import AppProps dari Next.js
import "@/styles/globals.css"; // Opsional, jika pakai CSS
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) { // ✅ Gunakan AppProps
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
