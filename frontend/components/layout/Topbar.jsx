"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

import styles from "./Topbar.module.css";
import { FaBell, FaSearch } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

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

        <button
          onClick={handleLogout}
          style={{
            background: "#C58B81",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            marginLeft: "12px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}