"use client";

import styles from "./Topbar.module.css";
import { FaBell, FaSearch } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      {/* Search Bar */}
      <div className={styles.search}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search destinations..."
        />
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <ThemeToggle />

        <button className={styles.notification}>
          <FaBell />
        </button>

        <div className={styles.avatar}>
          DR
        </div>
      </div>
    </div>
  );
}