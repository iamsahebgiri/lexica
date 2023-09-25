/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { IconifyIcon } from "@iconify/react";
import { Icon } from "@iconify/react";
import icon1stPlaceMedal from "@iconify/icons-fluent-emoji/1st-place-medal";
import fireIcon from "@iconify/icons-fluent-emoji/fire";
import japaneseReservedButton from "@iconify/icons-fluent-emoji/japanese-reserved-button";
import orangeBook from "@iconify/icons-fluent-emoji/orange-book";
import sportsMedal from "@iconify/icons-fluent-emoji/sports-medal";
import flagForIndia from "@iconify/icons-emojione-v1/flag-for-india";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { useSession } from "next-auth/react";

export interface MainLayoutProps {
  children: React.ReactNode;
  title?: String;
}

const navigation = [
  {
    href: "/learn",
    title: "Learn",
    icon: orangeBook,
  },
  {
    href: "/letters",
    title: "Letters",
    icon: japaneseReservedButton,
  },
  {
    href: "/leaderboards",
    title: "Leaderboards",
    icon: icon1stPlaceMedal,
  },
];

interface NavItemProps {
  href: string;
  title: string;
  isActive: boolean;
  icon: IconifyIcon;
}

const NavItem = ({ isActive, href, title, icon }: NavItemProps) => {
  return (
    <Link href={href} className="rounded-xl">
      <li
        className={cn(
          "flex items-center gap-3 rounded-lg border-2 border-transparent p-1 hover:bg-gray-200 sm:rounded-xl sm:p-2 sm:px-3",
          isActive && "border-2 border-blue-500 bg-blue-100 hover:bg-blue-100",
        )}
      >
        <Icon icon={icon} className="h-8 w-8" />
        <span
          className={cn(
            "hidden text-sm font-bold uppercase text-gray-600 sm:inline-block",
            isActive && "text-blue-700",
          )}
        >
          {title}
        </span>
      </li>
    </Link>
  );
};

export default function MainLayout({ children, title }: MainLayoutProps) {
  const router = useRouter();
  const { data: sessionData } = useSession();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Learn new language at ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <header className="fixed top-0 h-14 w-full sm:hidden">Header</header>
        <main className="my-14 min-h-screen sm:my-0 sm:ml-72">
          <div className="mx-auto max-w-5xl p-2 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex-1">{children}</div>
              <div className="hidden sm:block sm:w-72">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center rounded-2xl border-2 p-4 py-7 text-center">
                    <Icon icon={flagForIndia} className="h-12 w-12" />
                    <h3 className="font-bold">Hindi</h3>
                    <p className="mb-6 text-gray-500">Language</p>
                    <Button>Change language</Button>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border-2 p-4 py-8 text-center">
                    <Icon icon={fireIcon} className="h-12 w-12" />
                    <h3 className="font-bold">3 days</h3>
                    <p className="text-gray-500">Current streak</p>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border-2 p-4 py-8 text-center">
                    <Icon icon={sportsMedal} className="h-12 w-12" />
                    <h3 className="font-bold">5th</h3>
                    <p className="text-gray-500">Your rank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-background fixed bottom-0 flex h-14 w-full items-center p-2  sm:left-0 sm:h-screen sm:w-72 sm:items-start sm:border-r-2 sm:p-6">
          <ul className="flex w-full justify-around gap-2 sm:flex-col sm:gap-3">
            <div className="sm: mb-6 ml-4 mt-3.5 hidden text-3xl font-extrabold uppercase tracking-wider text-emerald-600 sm:block">
              Lexica
            </div>
            {navigation.map((nav) => (
              <NavItem
                key={nav.href}
                isActive={router.pathname === nav.href}
                {...nav}
              />
            ))}
            <Link
              href={`/profile/${sessionData?.user.id}`}
              className="rounded-xl"
            >
              <li
                className={cn(
                  "flex items-center gap-3 rounded-lg border-2 border-transparent p-1 hover:bg-gray-200 sm:rounded-xl sm:p-2 sm:px-3",
                  router.pathname.startsWith("/profile") &&
                    "border-2 border-blue-500 bg-blue-100 hover:bg-blue-100",
                )}
              >
                <img
                  src={sessionData?.user.image ?? undefined}
                  alt={sessionData?.user.image ?? undefined}
                  className="h-8 w-8 rounded-full"
                />

                <span
                  className={cn(
                    "hidden text-sm font-bold uppercase text-gray-600 sm:inline-block",
                    router.pathname.startsWith("/profile") && "text-blue-700",
                  )}
                >
                  Profile
                </span>
              </li>
            </Link>
          </ul>
        </footer>
      </div>
    </>
  );
}
