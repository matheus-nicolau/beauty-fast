import { ToggleTheme } from "@/components/toggle-theme";
import Spinner from "@/components/ui/spinner";

export default function Home() {
  return (
    <div>
      <ToggleTheme />
      <Spinner spinnerProps="border-amber-200" />
    </div>
  );
}
