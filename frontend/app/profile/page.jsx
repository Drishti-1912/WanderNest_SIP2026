"use client";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import styles from "./page.module.css";

export default function Profile() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.content}>
        <Topbar />

        <div className={styles.profileCard}>
          <div className={styles.avatar}>
            DR
          </div>

          <h1>Drishti Malhotra</h1>

          <p>Travel Explorer • WanderNest User</p>

          <button>Edit Profile</button>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Personal Information</h2>

            <div className={styles.info}>
              <p><strong>Email</strong></p>
              <span>drishti@email.com</span>
            </div>

            <div className={styles.info}>
              <p><strong>Phone</strong></p>
              <span>+91 9876543210</span>
            </div>

            <div className={styles.info}>
              <p><strong>Location</strong></p>
              <span>Chandigarh, India</span>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Travel Statistics</h2>

            <div className={styles.stats}>
              <div>
                <h3>12</h3>
                <span>Trips</span>
              </div>

              <div>
                <h3>20</h3>
                <span>Saved</span>
              </div>

              <div>
                <h3>5</h3>
                <span>Bookings</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.preferences}>
          <h2>Travel Preferences</h2>

          <div className={styles.tags}>
            <span>Adventure</span>
            <span>Mountains</span>
            <span>Eco Tourism</span>
            <span>Camping</span>
            <span>Photography</span>
          </div>
        </div>
      </main>
    </div>
  );
}