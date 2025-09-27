import ArrowLeftHeader from "@/components/ui/arrow-left-header";
import { CardRecover } from "./_components/card-recover";

export default function ForgotPassword() {
  return (
    <div>
      <header>
        <ArrowLeftHeader reference="/login" />
      </header>
      <div className="flex mt-16 sm:mt-26 w-full items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-sm">
          <CardRecover />
        </div>
      </div>
    </div>
  );
}
