"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Google OAuth Callback
  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) return;

    localStorage.setItem("token", token);

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Google User",
        email: "",
      })
    );

    router.replace("/dashboard");
  }, [searchParams, router]);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Normal Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginUser(form);

    if (data.success) {
      login(data.token, data.user);
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  // Google Login
  const handleGoogleLogin = () => {
    window.location.href =
  `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "100px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h1>WanderNest</h1>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#C58B81",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <hr style={{ margin: "25px 0" }} />

      <button
        onClick={handleGoogleLogin}
        style={{
          width: "100%",
          padding: "12px",
          background: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
