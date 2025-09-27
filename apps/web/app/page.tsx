import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
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
        <div>Logo</div>
        <div className={clsx("flex gap-2", "pl-2 sm:pl-8 pr-2 sm:pr-8")}>
          <Button variant={"outline"}>Cadastro</Button>
          <Link
            href={"/login"}
            className={clsx(cn(buttonVariants({ variant: "default" })))}
          >
            Login
          </Link>
        </div>
      </header>
    </div>
  );
}
