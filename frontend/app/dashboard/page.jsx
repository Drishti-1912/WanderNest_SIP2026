"use client";

import styles from "./page.module.css";

import { useTheme } from "../../context/ThemeContext";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Header from "../../components/layout/Header";

import StatCard from "../../components/dashboard/StatCard";
import TripCard from "../../components/dashboard/TripCard";
import ActionCard from "../../components/dashboard/ActionCard";
import ActivityItem from "../../components/dashboard/ActivityItem";

export default function Dashboard() {
  const { darkMode } = useTheme();

  return (
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

        <Header />

        {/* Stats */}
        <div className={styles.stats}>
          <StatCard value="12" title="Trips Planned" />
          <StatCard value="5" title="Bookings" />
          <StatCard value="20" title="Saved Places" />
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

        <TripCard />

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
          <ActivityItem
            icon="✨"
            title="AI Itinerary Generated"
            time="2 hours ago"
          />

          <ActivityItem
            icon="🏡"
            title="Homestay Booked"
            time="1 day ago"
          />

          <ActivityItem
            icon="❤️"
            title="Destination Saved"
            time="2 days ago"
          />
        </div>
      </main>
    </div>
  );
}