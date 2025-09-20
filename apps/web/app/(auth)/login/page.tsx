import { LoginPage } from "@/components/login-page";

export default async function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginPage />
      </div>
    </div>
  );
}
