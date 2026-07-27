import styles from "./Header.module.css";

export default function Header({ user }) {
  return (
    <div className={styles.header}>
      <div>
        <p className={styles.greeting}>
          Hello {user?.name || "Traveller"} 👋
        </p>

        <h1>Your Travel Dashboard</h1>

        <span>
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}