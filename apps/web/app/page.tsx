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
          "pt-4 pb-4 pl-4 sm:p-2"
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
        <div className={clsx("flex gap-4 pl-4 sm:pl-8 pr-4 sm:pr-8")}>
          <Link
            href={"/register"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-20 sm:w-24"
            )}
          >
            Cadastrar
          </Link>

          <Link
            href={"/login"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-20 sm:w-24"
            )}
          >
            Entrar
          </Link>
        </div>
      </header>
    </div>
  );
}
