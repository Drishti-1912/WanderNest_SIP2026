import styles from "./ActivityItem.module.css";

export default function ActivityItem({
  icon,
  title,
  time,
}) {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.icon}>
          {icon}
        </div>

        <h3>{title}</h3>
      </div>

      <span>{time}</span>
    </div>
  );
}