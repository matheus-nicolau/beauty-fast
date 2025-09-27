"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useTransition } from "react";
import Spinner from "@/components/ui/spinner";
import { handleRecover } from "../_action/handleRecover";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FormRecover() {
  const [isPending, startTransition] = useTransition();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      handleRecover(formData);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="email@exemplo.com"
            autoComplete="off"
            required
          />
        </div>
        {isPending ? (
          <Spinner spinnerProps={"border-zinc-400"} />
        ) : (
          <div className="flex flex-col gap-3">
            <Link
              href={"/recover"}
              className={cn(buttonVariants({ variant: "default" }), "w-full")}
            >
              Enviar
            </Link>
          </div>
        )}
      </div>
    </form>
  );
}
