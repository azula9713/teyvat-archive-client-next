"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minute
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
      }
    }
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    browserQueryClient ??= makeQueryClient();
    return browserQueryClient;
  }
}

export default function QueryProvider({ children }: Readonly<Props>) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
  );
}
