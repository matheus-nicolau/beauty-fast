"use server";

import { cookies } from "next/headers";

export async function handleSubmit(formData: FormData) {
  "use service";
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
