import "@/styles/globals.css";
import {GoogleOAuthProvider} from '@react-oauth/google'
import type { AppProps } from "next/app";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Inter } from "next/font/google";
import {Toaster} from 'react-hot-toast'
 
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="457345918950-qqsb6ic9odqn27cvj7fdi9ilune553kc.apps.googleusercontent.com">
          <Component {...pageProps} />
          <Toaster />
          <ReactQueryDevtools />
        </GoogleOAuthProvider>
      </QueryClientProvider> 
    </div>
  );
}
