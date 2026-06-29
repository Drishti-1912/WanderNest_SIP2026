import Link from "next/link";
import styles from "./ActionCard.module.css";

export default function ActionCard({
  icon,
  title,
  subtitle,
  href,
}) {
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>

        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}