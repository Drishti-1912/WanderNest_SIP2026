"use client";

import Link from "next/link";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import styles from "./page.module.css";

export default function Login() {
  return (
    <main className={styles.container}>
      {/* Left Panel */}
      <div className={styles.left}>
        <div className={styles.overlay}>
          <h1>Welcome Back 👋</h1>

          <p>
            Continue your journey with WanderNest and discover amazing eco
            stays, AI-powered travel planning and unforgettable experiences.
          </p>

          <div className={styles.features}>
            <div>🌿 Eco Friendly Destinations</div>
            <div>🤖 AI Trip Planner</div>
            <div>🏡 Unique Homestays</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className={styles.right}>
        <div className={styles.card}>
          <Link href="/" className={styles.back}>
            <IoArrowBack />
          </Link>

          <div className={styles.logoContainer}>
            <Image
              src="/images/logo.png"
              alt="WanderNest Logo"
              width={80}
              height={80}
              className={styles.logoImage}
            />

            <h1 className={styles.logo}>WanderNest</h1>

            <p className={styles.tagline}>
              Eco Stays & Trails
            </p>
          </div>

          <h2 className={styles.heading}>Login</h2>

          <p className={styles.subheading}>
            Sign in to access your travel dashboard.
          </p>

          <Input
            type="email"
            placeholder="Enter your email"
          />

          <Input
            type="password"
            placeholder="Enter your password"
          />

          <div className={styles.options}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <Link href="#">
              Forgot Password?
            </Link>
          </div>

          <Button text="Login" />

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <button className={styles.googleButton}>
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <p className={styles.footer}>
            Don't have an account?{" "}
            <Link href="/register" className={styles.link}>
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}