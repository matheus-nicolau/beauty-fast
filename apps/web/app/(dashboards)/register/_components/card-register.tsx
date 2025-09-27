import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormRegister from "./form-register";

export function CardRegister({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Cadastre sua Loja</CardTitle>
          <CardDescription>
            <FormRegister />
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
