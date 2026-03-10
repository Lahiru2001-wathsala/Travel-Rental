# 🚗 Drivana — Travel & Car Rental Platform

A modern, fully responsive React + Vite web application for a premium car rental service.

---

## 📁 Folder Structure

```
travel-rental/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Router & layout
    ├── index.css             # Global styles & CSS variables
    ├── components/
    │   ├── Navbar.jsx        # Responsive navbar with mobile menu
    │   ├── Navbar.css
    │   ├── Footer.jsx        # 4-column footer
    │   ├── Footer.css
    │   ├── CarCard.jsx       # Reusable car listing card
    │   └── CarCard.css
    ├── pages/
    │   ├── Home.jsx          # Landing page with hero, features, cars
    │   ├── Home.css
    │   ├── Cars.jsx          # Searchable, filterable car listing
    │   ├── Cars.css
    │   ├── CarDetail.jsx     # Full car info with image gallery
    │   ├── CarDetail.css
    │   ├── Booking.jsx       # Booking form with validation
    │   ├── Booking.css
    │   ├── About.jsx         # About page with timeline & team
    │   ├── About.css
    │   ├── Contact.jsx       # Contact form with info cards
    │   └── Contact.css
    └── data/
        └── cars.js           # Central car data source
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd travel-rental

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## ✨ Features

- **Home Page** — Hero with animated background, search bar, stats, featured cars, and CTA
- **Cars Listing** — Real-time search, category filters, price sorting, availability toggle
- **Car Details** — Image gallery with thumbnails, specs, features list, related cars
- **Booking Form** — Full validation, price calculator, success confirmation
- **About Page** — Timeline, team section, values, animated stats
- **Contact Page** — Validated contact form, info cards, office location

## 🎨 Design System

- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Colors**: Warm desert palette — terracotta, cream, midnight navy
- **Animations**: Fade-up on load, hover effects, smooth transitions
- **Responsive**: Mobile-first, breakpoints at 600px, 768px, 900px, 1024px

## 🔧 Tech Stack

- React 18 + Vite 5
- React Router v6
- Vanilla CSS with CSS Custom Properties
- Google Fonts (no Tailwind required)
