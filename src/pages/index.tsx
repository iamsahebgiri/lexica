import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexica</title>
        <meta name="description" content="Learn new language" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative">
        {/* Illustration behind hero content */}
        <div
          className="-z-1 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <h1
                className="leading-tighter mb-4 text-4xl font-extrabold tracking-tighter md:text-5xl"
                data-aos="zoom-y-out"
              >
                The
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  {" efficient "}
                </span>
                method of learning a language!
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-xl text-gray-600">
                  Discover Proven Strategies and Techniques to Master a New
                  Language Quickly and Effectively
                </p>
                <div className="mx-auto max-w-xs gap-4 sm:flex sm:max-w-none sm:justify-center">
                  <div>
                    <AuthShowcase />
                  </div>
                  <div>
                    <Button variant="outline">Learn more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AuthShowcase() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData ? (
        <Button onClick={() => router.push("/learn")}>Go to dashboard</Button>
      ) : (
        <Button onClick={() => void signIn()}>Get started</Button>
      )}
    </div>
  );
}
