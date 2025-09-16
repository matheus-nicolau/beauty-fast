import clsx from "clsx";

export default function Spinner({
  spinnerProps = "",
}: {
  spinnerProps: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(
          "border-5 border-t-transparent rounded-full",
          "w-5 h-5",
          "animate-spin",
          spinnerProps
        )}
      ></div>
    </div>
  );
}
