import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <p className={styles.greeting}>Hello Drishti 👋</p>

        <h1>Your Travel Dashboard</h1>

        <span>June 2026</span>
      </div>
    </div>
  );
}