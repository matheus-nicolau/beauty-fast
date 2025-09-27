import { ToggleTheme } from "@/components/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ArchiveIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header
        className={clsx(
          "border-b-2 border-zinc-100",
          "flex justify-between items-center",
          "p-2"
        )}
      >
        <div>
          <Link
            href={"/"}
            className="flex justify-center items-center gap-2 pl-2 sm:pl-8"
          >
            <ArchiveIcon /> Logo
          </Link>
        </div>
        <div className={clsx("flex gap-2", "pl-2 sm:pl-8 pr-2 sm:pr-8")}>
          <Link
            href={"/register"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-18 sm:w-24"
            )}
          >
            Cadastro
          </Link>

          <Link
            href={"/login"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-18 sm:w-24"
            )}
          >
            Login
          </Link>
        </div>
      </header>
      <ToggleTheme />
    </div>
  );
}
