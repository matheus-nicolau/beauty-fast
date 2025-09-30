import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function ArrowLeftHeader({ reference }: { reference: string }) {
  return (
    <div className={"w-4 mt-4 sm:mt-3 ml-4 sm:ml-3 "}>
      <Link href={reference} className="w-4">
        <ArrowLeftIcon />
      </Link>
    </div>
  );
}
