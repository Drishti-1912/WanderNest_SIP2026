import Link from "next/link";
import styles from "./Sidebar.module.css";

import {
  FaHome,
  FaRobot,
  FaHotel,
  FaHeart,
  FaUserCircle,
  FaLeaf,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <FaLeaf />
        <span>WanderNest</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/dashboard" className={styles.link}>
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link href="/ai-planner" className={styles.link}>
          <FaRobot />
          <span>AI Planner</span>
        </Link>

        <Link href="/homestay" className={styles.link}>
          <FaHotel />
          <span>Homestays</span>
        </Link>

        <Link href="/saved" className={styles.link}>
          <FaHeart />
          <span>Saved Places</span>
        </Link>

        <Link href="/profile" className={styles.link}>
          <FaUserCircle />
          <span>Profile</span>
        </Link>
      </nav>
    </aside>
  );
}