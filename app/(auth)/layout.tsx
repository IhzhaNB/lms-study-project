import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import MyLogo from "@/components/ui/my-logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "neutral",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" /> Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-1 self-center font-medium"
        >
          <MyLogo />
          <span className="font-logo text-lg">
            <span className="text-[#B90504]">CA</span>TA
          </span>
        </Link>

        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <span className="hover:text-foreground hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="hover:text-foreground hover:underline">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}
