import Link from "next/link";

export default function Register() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div style={{ width: "380px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#C58B81",
            marginBottom: "10px",
          }}
        >
          WanderNest
        </h1>

        <h2>Register</h2>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          Create your account
        </p>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#C58B81",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Register
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}