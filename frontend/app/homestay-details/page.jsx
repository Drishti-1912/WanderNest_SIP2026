"use client";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import styles from "./page.module.css";

export default function HomestayDetails() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.content}>
        <Topbar />

        <div className={styles.hero}>
          <div className={styles.image}>
            🏔️
          </div>

          <div className={styles.info}>
            <h1>Mountain View Cottage</h1>

            <p className={styles.location}>
              📍 Kasol, Himachal Pradesh
            </p>

            <div className={styles.rating}>
              ⭐ 4.9 • 254 Reviews
            </div>

            <p className={styles.description}>
              Experience peaceful mountain living surrounded by pine forests.
              Perfect for couples, backpackers and nature lovers.
            </p>

            <button>Book Now</button>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Amenities</h2>

          <div className={styles.amenities}>
            <span>🔥 Bonfire</span>
            <span>📶 Free WiFi</span>
            <span>🚿 Hot Water</span>
            <span>🍴 Kitchen</span>
            <span>🚗 Parking</span>
            <span>🐶 Pet Friendly</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>About the Host</h2>

          <div className={styles.host}>
            <div className={styles.avatar}>DR</div>

            <div>
              <h3>Raj Sharma</h3>
              <p>
                Hosting guests since 2019. Passionate about sustainable tourism
                and local experiences.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Location</h2>

          <div className={styles.map}>
            🗺️ Map Placeholder
          </div>
        </section>
      </main>
    </div>
  );
}