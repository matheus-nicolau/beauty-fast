import { LoginForm } from "@/components/login-form";
import { cookies } from "next/headers";

export default async function Login() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://127.0.0.1:3004/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await res.json();
    const accessToken = data.accessToken;

    const cookieStorage = await cookies();
    cookieStorage.set("Authorization", `Bearer ${accessToken}`, {
      httpOnly: true,
      maxAge: 60 * 60 * 1 * 1,
      path: "/",
    });
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
