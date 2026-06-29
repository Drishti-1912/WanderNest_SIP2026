import styles from "./StatCard.module.css";

export default function StatCard({ value, title }) {
  return (
    <div className={styles.card}>
      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
}