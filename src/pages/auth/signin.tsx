import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function SignInPage() {
  const { query } = useRouter();
  const { callbackUrl } = query;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 px-4 sm:w-[350px] sm:px-0">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Login to Lexica
          </h1>
          <p className="text-sm text-muted-foreground">
            We will create an account if doesn&apos;t exists.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            onClick={() =>
              signIn("github", {
                callbackUrl: callbackUrl as string,
              })
            }
            variant="gray"
          >
            Sign in with Github
          </Button>
          <Button
            onClick={() =>
              signIn("google", {
                callbackUrl: callbackUrl as string,
              })
            }
          >
            Sign in with Google
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="font-bold underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-bold underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
