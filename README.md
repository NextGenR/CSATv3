# CSAT Daily 10 Questions - Telegram Themed Productivity Web App

A clean, responsive Telegram-themed productivity web application for UPSC CSAT practice.

## Features
- **Telegram Web Dark Aesthetic**: Dark blue color palette (`#0e1621`, `#17212b`, `#242f3d`), subtle doodle wallpaper pattern, and floating sidebar.
- **Traditional Icons**: Utilizes Font Awesome traditional icon set.
- **Daily 10 Questions Section**: Clean productivity layout without chat bars.
- **October Practice History**: Displays October mock tests with scores out of 25 and randomized accuracy (70% - 90%).
- **UPSC CSAT Test Guidelines**:
  - 10 Questions, 25 Marks (+2.5 per correct, -0.833 negative penalty, 33% qualifying benchmark).
  - Language selection: English or हिन्दी (Hindi).
  - Fullscreen test initiation with green Start button.
- **Active Quiz Experience**:
  - Top Bar 1: Question navigator pills (1 to 10) with Attempted, Current, and Marked states.
  - Action buttons: Green Submit and Red Exit buttons with safety warning confirmation modals.
  - Top Bar 2: Live time tracking per question + Chapter name indicator.
  - Smooth & fast horizontal sliding animation between questions.
  - Bilingual switcher on the fly.
- **Detailed 3-Tier Post-Submission Analysis**:
  - **Tile 1**: *Questions Which Should Have Been Avoided* (Lengthy calculation traps & time wasters).
  - **Tile 2**: *Questions Which Should Not Have Been Wrong* (Core foundational formulaic questions).
  - **Tile 3**: *Questions Which Should Be Attempted* (Solvable questions that build qualifying margin).
  - Interactive drill-down question inspection with complete step-by-step solutions.
  - Chapter-wise question distribution & accuracy breakdown.
  - Question-wise attempt rate & option selection distribution (A / B / C / D %) highlighting common pitfalls.

## Tech Stack
- HTML5 (Multiple structured pages: `index.html`, `guidelines.html`, `quiz.html`, `analysis.html`)
- Vanilla CSS3 (Custom Telegram design system & sliding animations)
- Vanilla JavaScript (Local state management, timers, fullscreen API, analytics computation)
- Font Awesome 6 CDN (Traditional icons)
