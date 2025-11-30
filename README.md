# ☕ CaffeineFlow — Coffee Consumption Tracker

**Live Demo:** [https://caffeineflow.webstudiobydee.com](https://caffeineflow.webstudiobydee.com)

---

## 📌 Overview

CaffeineFlow is a **ReactJS + Firebase** application designed to help coffee lovers track their daily caffeine intake, costs, and consumption habits.  
It combines **authentication, Firestore database integration, and dynamic stats** to provide personalized insights into your coffee journey.

This project demonstrates full‑stack integration with Firebase, secure user authentication, and real‑time database updates — all deployed on a custom subdomain via Hostinger.

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS (Vite)
- **Styling:** Tailwind CSS + custom styles (`fanta.css`)
- **State Management:** React Context API + Hooks (`useState`, `useEffect`)
- **Backend:** Firebase Authentication & Firestore Database
- **Deployment:** Hostinger (subdomain: `caffeineflow.webstudiobydee.com`)

---

## 🚀 Features

- 🔑 **User Authentication** — Sign up, log in, and manage sessions securely with Firebase Auth.
- 📝 **Add Coffee Entries** — Track coffee type, size, price, and time since consumption.
- 📊 **Statistics Dashboard** — View active caffeine levels, daily totals, averages, and costs.
- 📈 **History Tracking** — See past entries with breakdowns by coffee type and percentage.
- 🔒 **Firestore Integration** — Data stored per user with secure Firestore rules.
- 🎨 **Responsive UI** — Clean, mobile‑friendly design with Tailwind CSS.

---

🎯 What I Practiced
- Structuring a React project with reusable components
- Managing authentication and global state with Context API
- Writing secure Firestore rules for per‑user data
- Deploying Firebase‑linked apps on static hosting (Hostinger)
- Styling with Tailwind CSS and custom design tweaks

---

## 🔐 Firebase Setup

Environment variables are stored in `.env` (ignored in Git):

```env
VITE_FIREBASE_APIKEY=your_api_key
VITE_FIREBASE_AUTHDOMAIN=your_auth_domain
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGINGSENDERID=your_sender_id
VITE_FIREBASE_APPID=your_app_id



