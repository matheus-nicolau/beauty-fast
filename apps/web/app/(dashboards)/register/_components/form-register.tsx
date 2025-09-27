"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTransition } from "react";
import { handleSubmit } from "@/app/(auth)/login/_actions/handleSubmit.action";
import Spinner from "@/components/ui/spinner";

export default function FormRegister() {
  const [isPending, startTransition] = useTransition();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      handleSubmit(formData);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="storeName">Nome da Empresa</Label>
          <Input
            id="storeName"
            type="text"
            name="storeName"
            autoComplete="off"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="admName">Nome do Administrador</Label>
          <Input
            id="admName"
            type="text"
            name="admName"
            autoComplete="off"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            required
          />
        </div>
        {isPending ? (
          <Spinner spinnerProps={"border-zinc-400"} />
        ) : (
          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}
