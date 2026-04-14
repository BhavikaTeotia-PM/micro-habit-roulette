# Micro-Habit Roulette

A mobile-first interactive prototype for a micro-habit building app. Built with HTML, CSS, and JavaScript — no frameworks required.

![Micro-Habit Roulette](https://img.shields.io/badge/version-1.0.0-green) ![License](https://img.shields.io/badge/license-MIT-blue)

## Overview

Micro-Habit Roulette helps users build better habits through quick, 2-minute actions. The app eliminates decision fatigue by randomly selecting science-backed micro-habits across four categories:

- **Strength** - Quick exercises like squats, push-ups, planks
- **Movement** - Stretches, walks, mobility exercises  
- **Breathing** - Box breathing, 4-7-8 technique, deep breaths
- **Mindfulness** - Body scans, gratitude moments, grounding exercises

## Features

### Core Functionality
- **One-tap habit selection** - Tap the Atomic Action button to get a random habit
- **Roulette animation** - 1.2-second spin animation builds anticipation
- **2-minute timer** - Countdown timer with visual progress bar
- **Streak tracking** - Consecutive day tracking with visual feedback
- **Activity heatmap** - 2-week view of your habit completion
- **Confetti celebration** - Fun animation when you complete a habit

### Screens
1. **Home** - Main screen with Atomic Action button, stats, and category chips
2. **Roulette** - Spinning animation while selecting your habit
3. **Task** - Habit details, timer, science fact, and completion button
4. **Win/Dashboard** - Celebration screen with stats and recent wins
5. **Progress** - Full dashboard view with heatmap and history
6. **Settings** - Preferences, notifications, and app settings

### Technical Features
- Mobile-first responsive design (390×844px viewport)
- LocalStorage persistence for stats and preferences
- WCAG AA accessible (contrast ratios, 48dp tap targets)
- Figma-accurate design implementation
- No build tools required - pure HTML/CSS/JS

## Getting Started

### Prototype live at `https://yourusername.github.io/repo-name](https://bhavikateotia-pm.github.io/micro-habit-roulette/`

## 📁 Project Structure

```
micro-habit-roulette/
├── index.html          # Main HTML file with all screens
├── css/
│   └── styles.css      # All styling (Figma-accurate)
├── js/
│   ├── app.js          # Main application logic
│   └── habits.js       # Habit pool (22 habits)
└── README.md           # This file
```

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Background | `#F7F7F3` | App background |
| Surface | `#FFFFFF` | Cards, nav |
| Primary | `#2EB873` | Buttons, accents |
| Accent | `#FF9920` | Streaks, highlights |
| Movement | `#FF7A45` | Movement category |
| Breathing | `#55ABEE` | Breathing category |
| Mindfulness | `#9978EB` | Mindfulness category |
| Strength | `#2EB873` | Strength category |

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

## Requirements Compliance

This prototype implements the requirements from the Micro-Habit Roulette requirements document:

| Requirement | Status |
|-------------|--------|
| Random selection from 20+ habits | ✅ 22 habits |
| Spin animation ≥0.8 seconds | ✅ 1.2 seconds |
| First habit in <20 seconds | ✅ ~3 seconds |
| Zero onboarding | ✅ Direct to home |
| 2-minute default timer | ✅ Implemented |
| Streak tracking | ✅ With persistence |
| Activity heatmap | ✅ 2-week view |
| WCAG AA contrast | ✅ Verified |
| 48dp tap targets | ✅ All buttons |
| Local-first storage | ✅ LocalStorage |
| No account required | ✅ Anonymous |

## Customization

### Adding New Habits
Edit `js/habits.js` and add to the `HABITS` array:

```javascript
{
    id: 23,
    name: "Your Habit Name",
    description: "Instructions for the habit...",
    category: "strength", // or movement, breathing, mindfulness
    icon: "💪",
    duration: 120, // seconds
    fact: "Science fact about why this works..."
}
```

### Changing Colors
Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary: #2EB873;
    --accent: #FF9920;
    /* ... */
}
```

## Browser Support

- ✅ Chrome (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome for Android)

Built for PDRE assignment | April 2026
