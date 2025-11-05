"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UseLoginReturn } from "@/types/LoginForm";

export function useLogin(): UseLoginReturn {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError("Network error. Please check your connection.");
      setLoading(false);
    }
  };

  return {
    username,
    password,
    loading,
    error,
    setUsername,
    setPassword,
    handleLogin,
  };
}
