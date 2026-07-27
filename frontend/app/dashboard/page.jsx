"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

import { useTheme } from "../../context/ThemeContext";
import ProtectedRoute from "../../components/ProtectedRoute";

import { getProfile } from "../../services/authService";
import { getHomestays } from "../../services/api";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Header from "../../components/layout/Header";

import StatCard from "../../components/dashboard/StatCard";

import ActionCard from "../../components/dashboard/ActionCard";


export default function Dashboard() {
  const { darkMode } = useTheme();

  const [user, setUser] = useState(null);
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();

        if (data.success) {
  setUser(data.user);

  const homestayData = await getHomestays();
  setHomestays(homestayData);
} else {
          setError(data.message || "Unable to load profile.");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while loading your profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "22px",
        }}
      >
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "red",
          fontSize: "18px",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div
        className={styles.layout}
        style={{
          background: darkMode ? "#1F1F1F" : "#F7F6F3",
          transition: "0.3s ease",
        }}
      >
        <Sidebar />

        <main className={styles.content}>
          <Topbar />

          <Header user={user} />

          {/* Stats */}
         <div className={styles.stats}>
  <StatCard
  value={user?.name ? "1" : "0"}
  title="Authenticated User"
/>

  <StatCard
    value={homestays.length.toString()}
    title="Available Homestays"
  />
</div>

         {/* Upcoming Trip */}
<h2
  className={styles.sectionTitle}
  style={{
    color: darkMode ? "#FFFFFF" : "#2F2F2F",
  }}
>
  Upcoming Trip
</h2>

<div
  style={{
    padding: "20px",
    borderRadius: "10px",
    background: darkMode ? "#2A2A2A" : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#2F2F2F",
  }}
>
  <h3>No upcoming trips found.</h3>
  <p>Your AI-generated trips will appear here.</p>
</div>

          {/* Quick Actions */}
          <h2
            className={styles.sectionTitle}
            style={{
              color: darkMode ? "#FFFFFF" : "#2F2F2F",
            }}
          >
            Quick Actions
          </h2>

          <div className={styles.actions}>
            <ActionCard
              icon="✨"
              title="AI Planner"
              subtitle="Generate itinerary"
              href="/ai-planner"
            />

            <ActionCard
              icon="🏡"
              title="Find Homestays"
              subtitle="Browse & Book"
              href="/homestay"
            />

            <ActionCard
              icon="❤️"
              title="Saved Places"
              subtitle="View Wishlist"
              href="/saved"
            />

            <ActionCard
              icon="👤"
              title="Profile"
              subtitle="Manage Account"
              href="/profile"
            />
          </div>

         {/* Recent Activity */}
<h2
  className={styles.sectionTitle}
  style={{
    color: darkMode ? "#FFFFFF" : "#2F2F2F",
  }}
>
  Recent Activity
</h2>

<div className={styles.activity}>
  <div
    style={{
      padding: "20px",
      borderRadius: "10px",
      background: darkMode ? "#2A2A2A" : "#FFFFFF",
      color: darkMode ? "#FFFFFF" : "#2F2F2F",
    }}
  >
    <h3>No recent activity found.</h3>
    <p>Your activity will appear here once you start using the application.</p>
  </div>
</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}