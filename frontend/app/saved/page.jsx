"use client";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import styles from "./page.module.css";

const savedPlaces = [
  {
    id: 1,
    name: "Mountain View Cottage",
    location: "Kasol",
    price: "₹2500/night",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Forest Eco Lodge",
    location: "Rishikesh",
    price: "₹3200/night",
    rating: "4.8",
  },
  {
    id: 3,
    name: "River Side Retreat",
    location: "Manali",
    price: "₹2800/night",
    rating: "4.7",
  },
];

export default function Saved() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.content}>
        <Topbar />

        <h1>❤️ Saved Places</h1>

        <p>Your favourite destinations.</p>

        <div className={styles.grid}>
          {savedPlaces.map((place) => (
            <div key={place.id} className={styles.card}>
              <div className={styles.image}>🏡</div>

              <h2>{place.name}</h2>

              <p>{place.location}</p>

              <div className={styles.bottom}>
                <span>{place.price}</span>

                <span>⭐ {place.rating}</span>
              </div>

              <button>View Details</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}