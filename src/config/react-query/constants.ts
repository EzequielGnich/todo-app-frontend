import { QueryClient } from "@tanstack/react-query";

const TEN_MINUTES = 1000 * 60 * 10;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: TEN_MINUTES,
      retryDelay: 5000,
      retry: 5,
    },
    mutations: {},
  },
});
