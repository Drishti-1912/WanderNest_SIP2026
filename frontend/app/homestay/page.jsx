"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import styles from "./page.module.css";

import { getHomestays } from "../../services/api";

export default function Homestay() {

  const [homestays, setHomestays] = useState([]);

  useEffect(() => {
    async function fetchHomestays() {
      const data = await getHomestays();
      setHomestays(data);
    }

    fetchHomestays();
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.content}>
        <Topbar />

        <div className={styles.header}>
          <h1>🏡 Explore Homestays</h1>

          <p>
            Discover hand-picked eco-friendly stays recommended for your trip.
          </p>
        </div>

        <div className={styles.grid}>
          {homestays.map((stay) => (
            <div
              key={stay.id}
              className={styles.card}
            >
              <div className={styles.image}>
                {stay.image}
              </div>

              <div className={styles.body}>
                <h2>{stay.name}</h2>

                <p>{stay.location}</p>

                <div className={styles.bottom}>
                  <span>₹{stay.price} / night</span>

                  <span>⭐ {stay.rating}</span>
                </div>

                <button>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}