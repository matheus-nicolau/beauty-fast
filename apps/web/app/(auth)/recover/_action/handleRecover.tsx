"use server";

import { redirect } from "next/navigation";

export async function handleRecover(formData: FormData) {
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

  redirect("/recover");
}
