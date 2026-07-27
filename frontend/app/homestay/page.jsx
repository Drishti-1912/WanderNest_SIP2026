"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import styles from "./page.module.css";

import {
  getHomestays,
  addHomestay,
  updateHomestay,
  deleteHomestay,
} from "../../services/api";

export default function Homestay() {
  const [homestays, setHomestays] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    image: "",
  });

 const fetchHomestays = async () => {
  try {
    setLoading(true);

    const data = await getHomestays();

    setHomestays(data);
    setError("");
  } catch (err) {
    console.error(err);
    setError("Failed to load homestays.");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
  const loadData = async () => {
    await fetchHomestays();
  };

  loadData();
}, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addHomestay({
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
    });

    setForm({
      name: "",
      location: "",
      price: "",
      rating: "",
      image: "",
    });

    fetchHomestays();
  };

  if (loading) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      Loading Homestays...
    </div>
  );
}

if (error) {
  return (
    <div style={{ padding: "40px", color: "red", textAlign: "center" }}>
      {error}
    </div>
  );
}

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

        {/* Add Homestay Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <button type="submit">
            Add Homestay
          </button>
        </form>

        <div className={styles.grid}>
  {homestays.length === 0 ? (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        padding: "40px",
      }}
    >
      <h2>No Homestays Found</h2>
      <p>Create your first homestay.</p>
    </div>
  ) : (
    homestays.map((stay) => (
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

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              onClick={async () => {
                const newPrice = prompt(
                  "Enter new price:",
                  stay.price
                );

                if (!newPrice) return;

                await updateHomestay(stay.id, {
                  name: stay.name,
                  location: stay.location,
                  price: Number(newPrice),
                  rating: stay.rating,
                  image: stay.image,
                });

                fetchHomestays();
              }}
            >
              Update
            </button>

            <button
              onClick={async () => {
                const confirmDelete = window.confirm(
                  "Are you sure you want to delete this homestay?"
                );

                if (!confirmDelete) return;

                await deleteHomestay(stay.id);

                fetchHomestays();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))
  )}
</div>
      </main>
    </div>
  );
}