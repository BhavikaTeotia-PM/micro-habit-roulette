# Micro-Habit Roulette - Assignment Submission

**Student Name:** [Your Name]  
**Date:** April 14, 2026  
**Assignment:** Individual Assignment - AI-Assisted SDLC

---

## 1. Requirements Document

### Link to Requirements Document
[Include link to your requirements document PDF/Google Doc]

### Summary
The requirements document covers:
- **Problem Space:** Modern life makes habit-building difficult due to decision fatigue and time constraints
- **User Personas:** 5 personas (Arjun - Software Engineer, Priya - Student, Sunita & Ramesh - Working Parents, Kavya - High School Student, Rajiv - Senior Manager)
- **Use Cases:** 5 core use cases (Trigger Random Habit, Track Micro-Win, Review Dashboard, Daily Nudge, View Task Context)
- **Non-Functional Requirements:** Performance (<1.5s animation), Usability (<20s to first habit), Accessibility (WCAG AA)
- **Solution Components:** Home Screen, Habit Engine, Task Card, Win Logger, Progress Dashboard

### AI Assistance for Requirements
- **Tool Used:** [ChatGPT/Claude/etc.]
- **Prompts Used:** [Include your prompts for generating the requirements document]
- **Manual Edits:** [Describe any changes you made to the AI-generated content]

---

## 2. Clickable Prototype

### Prototype Link
**GitHub Pages:** https://[your-username].github.io/micro-habit-roulette/

*(See deployment instructions below)*

### Prototype Description
A fully interactive HTML/CSS/JavaScript prototype implementing all 6 screens of the Micro-Habit Roulette app:

| Screen | Description |
|--------|-------------|
| **Home** | Main screen with Atomic Action button, streak banner, stats card, category chips |
| **Roulette** | 1.2-second spin animation with progress bar while selecting a random habit |
| **Task** | Habit details card with 2-minute countdown timer, science fact, completion button |
| **Win/Dashboard** | Celebration screen with confetti, updated stats, activity heatmap |
| **Progress** | Full dashboard with 2-week heatmap and recent wins history |
| **Settings** | User preferences, notification toggles, app settings |

### Key Features
- ✅ One-tap habit selection (zero onboarding)
- ✅ Random selection from 22 science-backed micro-habits
- ✅ 2-minute countdown timer with visual progress
- ✅ Streak tracking with LocalStorage persistence
- ✅ Activity heatmap (2-week view)
- ✅ Confetti celebration animation
- ✅ Mobile-first responsive design (390×844px)
- ✅ WCAG AA accessible

### Instructions for Using the Prototype
1. Open the link in any modern browser (Chrome recommended)
2. **Tap the green "Atomic Action" button** to start
3. Watch the roulette spin animation (~1.2 seconds)
4. View your randomly selected habit with timer
5. **Tap "Mark as done"** when complete
6. See the celebration screen with updated stats
7. Use bottom navigation to explore Progress and Settings screens

### AI Assistance for Prototype

#### Tool Used
**Cline (VS Code Extension)** with SAP AI Core

#### Prompts and Responses

**Prompt 1:** "can you connect to my figma?"

**Response:** Cline asked clarifying questions about the use case and whether I had a Figma access token.

---

**Prompt 2:** "i want to create figma prototype but i don't have figma premium but i have sap ai core cline keys"

**Response:** Cline explained that it cannot directly create Figma prototypes but offered alternatives:
- Create interactive HTML/CSS/JS prototypes
- Use free design tools (Figma Free Tier, Penpot, Canva)
- Generate UI mockups as code

---

**Prompt 3:** [Provided Figma plugin code for 5 screens + Requirements document]

"FIGMA CODE: [Full Figma plugin code for Micro-Habit Roulette screens]

requirements doc for your consideration: [Full requirements document]

My problem: don't have figma premium, can't seem to understand what to do for prototype."

**Response:** Cline analyzed both the Figma code and requirements document, then proposed creating a fully functional HTML/CSS/JS prototype that:
- Implements all 5 screens from the Figma design
- Follows the exact color palette (#F7F7F3, #2EB873, #FF9920)
- Includes all interactive features (spin animation, timer, confetti)
- Meets all requirements (≥0.8s spin, <20s to first habit, 20+ habits)

---

**Prompt 4:** "remember the figma code also if it has better intuitive ux and do this in a separate window and folder"

**Response:** Cline confirmed it would:
- Create the prototype in a separate folder (`~/Desktop/micro-habit-roulette/`)
- Preserve all UX details from the Figma code
- Include the exact visual design elements (shadows, typography, colors)

Cline then created the following files:
1. `index.html` - Complete HTML structure for all screens
2. `css/styles.css` - Full styling matching Figma design
3. `js/habits.js` - Pool of 22 micro-habits across 4 categories
4. `js/app.js` - All interactive functionality
5. `README.md` - Documentation

#### Manual Edits Made
- [List any changes you made to the generated code]
- Example: "Added additional habits to the pool"
- Example: "Modified color scheme slightly"

---

## 3. Deployment Instructions (GitHub Pages)

### Step 1: Create GitHub Repository
```bash
cd ~/Desktop/micro-habit-roulette
git init
git add .
git commit -m "Initial commit - Micro-Habit Roulette prototype"
```

### Step 2: Push to GitHub
1. Go to https://github.com/new
2. Create a new repository named `micro-habit-roulette`
3. Run:
```bash
git remote add origin https://github.com/[your-username]/micro-habit-roulette.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your prototype will be live at: `https://[your-username].github.io/micro-habit-roulette/`

---

## 4. File Structure

```
micro-habit-roulette/
├── index.html          # Main HTML (19.8 KB)
├── css/
│   └── styles.css      # Styling (15.2 KB)
├── js/
│   ├── app.js          # App logic (9.8 KB)
│   └── habits.js       # Habit pool (6.4 KB)
├── README.md           # Documentation
└── SUBMISSION.md       # This file
```

---

## 5. Requirements Compliance Matrix

| Requirement | Implementation | Status |
|-------------|----------------|--------|
| Random selection from 20+ habits | 22 habits in `habits.js` | ✅ |
| Spin animation ≥0.8 seconds | 1.2 second animation | ✅ |
| Animation <1.5 seconds total | Completes in ~1.5s | ✅ |
| First habit in <20 seconds | ~3 seconds from app open | ✅ |
| Zero onboarding | Direct to home screen | ✅ |
| 2-minute default timer | Countdown with progress bar | ✅ |
| Streak tracking | LocalStorage persistence | ✅ |
| Activity heatmap | 2-week grid view | ✅ |
| WCAG AA contrast | Verified color ratios | ✅ |
| 48dp tap targets | All buttons ≥48px | ✅ |
| Local-first storage | LocalStorage only | ✅ |
| No account required | Anonymous user | ✅ |

---

## 6. Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, CSS Variables, Animations
- **JavaScript (ES6+)** - No frameworks, vanilla JS
- **Google Fonts** - Inter font family
- **LocalStorage** - Data persistence

---

*This prototype was created with AI assistance from Cline (VS Code Extension) using SAP AI Core.*