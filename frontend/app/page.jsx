import Link from "next/link";

export default function Home() {
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
      <div
        style={{
          width: "350px",
          textAlign: "center",
        }}
      >
        <img
          src="/images/logo.png"
          alt="WanderNest Logo"
          style={{
            width: "150px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#C58B81",
            fontSize: "42px",
            fontWeight: "700",
          }}
        >
          WanderNest
        </h1>

        <p style={{ color: "#777", marginBottom: "40px" }}>
          Eco Stays And Trails
        </p>

        <Link href="/login">
          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#C58B81",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            Login
          </button>
        </Link>

        <Link href="/register">
          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#fff",
              color: "#C58B81",
              border: "1px solid #C58B81",
              borderRadius: "8px",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </main>
  );
}