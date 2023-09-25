import { type Session } from "next-auth";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

import { api } from "@/utils/api";
import "@/styles/globals.css";
import { useEffect } from "react";
import type { NextPage } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

type AppPropsWithAuth = AppProps & {
  Component: NextPage & { auth?: boolean };
  pageProps: {
    session: Session | null;
  };
};
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithAuth) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${nunito.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return null;
}

export default api.withTRPC(MyApp);
