import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function ArrowLeftHeader() {
  return (
    <div className={"pt-4 sm:pt-3 pl-4 sm:pl-3"}>
      <Link href={"/"}>
        <ArrowLeftIcon />
      </Link>
    </div>
  );
}
