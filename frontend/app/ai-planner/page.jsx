"use client";

import styles from "./page.module.css";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import Button from "../../components/ui/Button";

export default function AIPlanner() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.content}>
        <Topbar />

        <div className={styles.header}>
          <h1>🤖 AI Travel Planner</h1>
          <p>
            Tell us your preferences and let AI create your perfect itinerary.
          </p>
        </div>

        <div className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label>Destination</label>
              <input
                type="text"
                placeholder="e.g. Kasol"
              />
            </div>

            <div className={styles.field}>
              <label>Budget</label>
              <select>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹20,000</option>
                <option>₹20,000+</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Duration</label>
              <select>
                <option>2 Days</option>
                <option>3 Days</option>
                <option>5 Days</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Travel Style</label>
              <select>
                <option>Adventure</option>
                <option>Relaxation</option>
                <option>Nature</option>
                <option>Photography</option>
              </select>
            </div>
          </div>

          <div className={styles.button}>
            <Button text="Generate AI Itinerary" />
          </div>
        </div>

        <div className={styles.result}>
          <h2>Suggested Itinerary</h2>

          <div className={styles.dayCard}>
            <h3>Day 1</h3>

            <ul>
              <li>Arrival & Check-in</li>
              <li>Visit Local Market</li>
              <li>Sunset Point</li>
            </ul>
          </div>

          <div className={styles.dayCard}>
            <h3>Day 2</h3>

            <ul>
              <li>Trek to Kheerganga</li>
              <li>Camping</li>
              <li>Bonfire</li>
            </ul>
          </div>

          <div className={styles.dayCard}>
            <h3>Day 3</h3>

            <ul>
              <li>Explore Cafes</li>
              <li>Shopping</li>
              <li>Return Journey</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}