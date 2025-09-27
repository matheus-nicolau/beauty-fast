import ArrowLeftHeader from "@/components/ui/arrow-left-header";
import { CardRegister } from "./_components/card-register";

export default async function Login() {
  return (
    <div>
      <header>
        <ArrowLeftHeader reference="/" />
      </header>
      <div className="flex mt-16 sm:mt-26 w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CardRegister />
        </div>
      </div>
    </div>
  );
}
