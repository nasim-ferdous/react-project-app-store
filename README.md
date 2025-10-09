# App Store - React Project

A modern **App Store web application** built with **React, Tailwind CSS**, and **React Router**, showcasing trending apps, detailed app pages, and install/uninstall features powered by **localStorage**.

## Features

🏠 **Home Page:**  
 Displays a curated list of trending apps with images, ratings, and download counts.

- 🔍 **App Search:**  
  Search through all available applications in real time.

- 📊 **App Details:**

  - View detailed information about each app.
  - Displays downloads, ratings, and reviews.
  - Interactive bar chart built with **Recharts**.
  - “Install Now” button that stores installed apps in `localStorage`.

- 📦 **Installed Apps Page:**

  - View and manage installed apps.
  - Sort installed apps by size (ascending/descending).
  - Uninstall apps from localStorage.

- ⚡ **Loading Spinner:**  
  Displays a spinner while navigation or data loading is in progress.

- 🧩 **Modular Components:**  
  Includes reusable components such as:
  - `Navbar`
  - `Footer`
  - `AppCard`
  - `Banner`
  - `LoadingSpinner'

## Tech Stack

| **React.js** | Frontend framework |
| **React Router DOM** | Page routing and navigation |
| **Tailwind CSS** | Styling and responsive design |
| **Recharts** | Data visualization (ratings chart) |
| **React Toastify** | Notifications for install/uninstall actions |
| **Lucide React Icons** | Icons for UI elements |

## Key Components Overview

MainLayout.jsx

Manages navigation using useNavigation().

Displays a spinner (LoadingSpinner) during page transitions.

🏠 Home.jsx

Shows trending apps (first 8 from dataset).

“Show All” button navigates to the full apps list.

🔍 Apps.jsx

Displays all available apps.

Search functionality filters apps by title.

📊 AppDetails.jsx

Detailed app page.

Includes rating bar chart (Recharts).

Allows users to install apps and save them in localStorage.

💾 Installation.jsx

Displays installed apps list.

Supports sorting and uninstalling apps.

## How It Works

App data is fetched or imported using a custom hook (useApps()).

Navigation loading is detected via React Router’s useNavigation.

Spinner appears while routes are loading.

Installed apps are managed using localStorage.

Toast notifications display status messages.
