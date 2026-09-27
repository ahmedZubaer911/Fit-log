# 🏋️ FitLog

### Train with intent. Log every set.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-FitLog-C2F800?style=for-the-badge\&logo=vercel\&logoColor=black)](https://fit-log-beta-one.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge\&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss)](https://tailwindcss.com/)

> **FitLog** is a modern workout library and planning application where users can explore workouts, view detailed exercise information, save workouts for later, and build a personal plan for the day.

---

## 🌐 Live Demo

### 👉 [Open FitLog](https://fit-log-beta-one.vercel.app/)

FitLog provides a dark, responsive workout experience with a library of **12 exercises covering major muscle groups**, including workout duration, calories, equipment, and ratings.

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse a collection of workouts covering different muscle groups.

Each workout card provides important information such as:

* Muscle group
* Exercise name
* Equipment
* Duration
* Calories
* Rating

---

### 2. 📖 Detailed Workout Information

Open any workout to view its complete information, including:

* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Step-by-step instructions

---

### 3. 📋 Today's Workout Plan

Create a personal workout plan by adding exercises to **Today's Plan**.

Users can:

* Add workouts to the plan
* View planned exercises
* Check total exercises, minutes, and calories
* Mark workouts as completed
* Remove workouts from the plan

---

### 4. 🔖 Save Workouts for Later

Save workouts that you want to revisit later.

The **Saved** section allows users to:

* View saved workouts
* Sort saved workouts
* Open workout details
* Remove saved workouts

---

### 5. 📱 Fully Responsive Design

FitLog is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The navigation, workout library, workout details, planning interface, buttons, and footer adapt to different screen sizes.

---

## 🛠️ Technologies Used

| Technology          | Purpose                                 |
| ------------------- | --------------------------------------- |
| **Next.js**         | React framework and application routing |
| **TypeScript**      | Type-safe application development       |
| **Tailwind CSS**    | Responsive UI styling                   |
| **Lucide React**    | Interface icons                         |
| **React Hot Toast** | Success and action notifications        |
| **FitLog API**      | Workout data                            |

---

## 🎨 Design

FitLog uses a modern dark-themed interface with:

* Minimal and clean layouts
* High-contrast typography
* Responsive workout cards
* Accent-based interactive elements
* Mobile-first responsive behavior

The home page includes the **WORKOUT LIBRARY** hero section, the **THE LIBRARY** workout collection, and a clear call-to-action for browsing workouts.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   ├── workouts/
│   │   └── [id]/
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── WorkoutActions.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   └── ...
│
├── context/
│   └── FitLogContext.tsx
│
└── types/
    └── workoutType.ts
```

---

## 🚀 Run Locally

### Clone the repository

```bash
git clone https://github.com/ahmedZubaer911/Fit-log.git
```

### Go to the project directory

```bash
cd Fit-log
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🔌 API

FitLog uses a REST API to retrieve workout information.

### Get all workouts

```text
GET /api/fitlog
```

### Get a single workout

```text
GET /api/fitlog/:id
```

The API provides the workout information displayed throughout the application.

---

## 📌 Project Highlights

* ⚡ Built with Next.js App Router
* 🧩 Reusable React components
* 🎨 Modern dark-themed UI
* 📱 Fully responsive across devices
* 🔄 API-based workout data
* 📋 Personal workout planning
* 🔖 Saved workout management
* 🔔 Interactive toast notifications
* 🚨 Custom loading and 404 states

---

## 👨‍💻 Project

**FitLog — Workout Library**

Built as a frontend web development project using **Next.js, TypeScript, Tailwind CSS, and REST API integration**.

---

<div align="center">

### 💪 Train hard. Log honest.

**FitLog — Workout Library**

</div>
