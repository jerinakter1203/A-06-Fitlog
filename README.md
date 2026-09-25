# FitLog

FitLog is a modern and responsive workout library and workout planning web application. It allows users to explore different workouts, view detailed workout information, create a daily workout plan, save workouts for later, and track completed workouts.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- Next.js App Router
- REST API
- LocalStorage

## 5 Key Features

1. **Workout Library**
   - Browse all available workouts fetched from the FitLog API.
   - View workout images, muscle groups, equipment, duration, calories, and ratings.

2. **Workout Details**
   - View detailed information about each workout.
   - See difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.

3. **My Plan**
   - Add workouts to today's plan.
   - Remove workouts from the plan.
   - View total workouts, total duration, and total calories.
   - Maximum 5 workouts can be added to the plan.

4. **Save & Track Workouts**
   - Save workouts for later.
   - Mark planned workouts as completed.
   - Plan, saved workouts, and completed workouts are preserved using LocalStorage.

5. **Responsive & Interactive UI**
   - Fully responsive design for mobile, tablet, and desktop.
   - Mobile hamburger navigation.
   - Workout sorting by rating, duration, and calories.
   - Loading state, toast notifications, and custom 404 page.

## API

Workout data is fetched from:

https://api.abcz.workers.dev/api/fitlog

## Project Structure

```text
src/
├── app/
│   ├── workout/
│   │   └── [id]/
│   │       └── page.js
│   ├── my-plan/
│   │   └── page.js
│   ├── page.js
│   ├── layout.js
│   ├── loading.js
│   └── not-found.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Library.jsx
│   ├── WorkoutActions.jsx
│   └── Footer.jsx
│
└── context/
    └── FitLogContext.jsx

    Main Pages
Home Page

The home page includes:

Responsive Navbar
Hero section
Workout Library
Workout sorting
Footer
Workout Details Page

Users can:

View workout details
See equipment and difficulty
View sets and reps
Read workout instructions
Add workouts to today's plan
Save workouts for later
My Plan Page

Users can:

View today's workout plan
View saved workouts
See total workout count
See total duration
See total calories
Mark workouts as done
Remove workouts
Responsive Design

FitLog is designed to work across:

Mobile
Tablet
Desktop

The navigation includes a hamburger menu for smaller screens.

Getting Started

Clone the repository and install the dependencies:

npm install

Run the development server:

npm run dev

Open the application in your browser:

http://localhost:3000
Build

Create a production build:

npm run build

Run the production server:

npm start
Author

FitLog was developed as a frontend web development project using Next.js, React, and Tailwind CSS.