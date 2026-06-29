import styles from "./TripCard.module.css";

export default function TripCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <span className={styles.badge}>Upcoming</span>

        <div className={styles.imagePlaceholder}>
          🏔️
        </div>
      </div>

      <div className={styles.content}>
        <h2>Kasol Adventure</h2>

        <p>📅 15 July - 18 July • 3 nights</p>

        <button>
          🗺 View Details →
        </button>
      </div>
    </div>
  );
}