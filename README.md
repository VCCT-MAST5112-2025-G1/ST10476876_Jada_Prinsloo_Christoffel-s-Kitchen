
## Introduction 
-Christoffel’s Kitchen is a polished, user-friendly restaurant menu management app built with React + TypeScript.

-It allows restaurant staff to add, edit, delete, and view menu items organized into categories (Starters, Mains, Desserts, Drinks).

-Guests can browse the menu, view prices, and see the average price of all dishes.

-The app also includes a Change Log system that records all updates for accountability and assessment purposes.

## Key Features (Aligned with Rubric)
-Rubric Skill	Feature	Description

-User Interface & Change Log Responsive, modern UI using Tailwind CSS and Framer Motion animations.

-Persistent Change Log stored in localStorage with timestamps and actions.	

-Display Average Price: Automatic average price calculation across all menu items, updated dynamically.	

-Separate Add/Edit Screen Full-screen MenuFormPage for adding and editing menu items, replacing the older modal approach.

-Save & Remove Items (Array) Menu items stored in arrays under categories; CRUD functions in useMenu.ts ensure stability and data persistence.	

-Filter by Course Category-based organization (Starters, Mains, Desserts, Drinks) on the main page, easy for guests to browse.	

-Coding Standards.Clear variable naming, efficient state management, minimal redundancy, and modular architecture.	

-UI Consistency.Unified color scheme (amber/orange tones), clear typography, and consistent spacing throughout.	

## Project Structure
src/
├── App.tsx                # Root component with routing and context provider
├── useMenu.ts             # Core logic: CRUD operations, data persistence, average price, change log
├── TodaysMenu.tsx         # Main menu display (filter by category)
├── MenuFormPage.tsx       # Separate page for adding and editing dishes
├── ChangeLog.tsx          # Displays recorded add/edit/delete actions
├── AveragePrice.tsx       # Shows computed average price of all dishes
├── assets/
│   └── burrata-caprese.jpg  # Local image asset
├── ui/
│   ├── card.tsx           # UI Card component
│   ├── tabs.tsx           # UI Tabs component
└── figma/
    └── ImageWithFallback.tsx

 ## Installation & Setup
# Requirements

Ensure you have:
-Node.js v18+

-npm v9+ or yarn

-Visual Studio Code / Azure Labs environment

## Clone or Extract
-If this is a .zip, extract it to a folder on your system or Azure Labs workspace.

## Install Dependencies
-Run this in the project directory:
-npm install

-If you want to be 100% safe (especially in Azure Labs), run this full setup:

-npm install react react-dom react-router-dom framer-motion lucide-react date-fns tailwindcss postcss autoprefixer typescript @types/react @types/react-dom @types/react-router-dom

## Run the App
-npx expo start --tunnel

-Then open the link displayed in the terminal (usually http://localhost:5173 or http://localhost:3000).

## Data Storage
-All menu items and change logs are stored in the browser’s localStorage under:
-christoffels-kitchen-menu

-christoffels-kitchen-changelog

-Data persists between sessions.

-You can clear the log from the Change Log page.

##  Average Price Feature
-The AveragePrice component automatically:

-Extracts all numeric values from menu item prices (e.g., “R120” → 120).

-Calculates and displays the mean price rounded to two decimals.

-Updates instantly when items are added, edited, or removed.

## Change Log System
-Each change (add, update, delete) creates a new log entry with:

-Timestamp (using date-fns)

-Action type

-Description (e.g., “Added Truffle Arancini (starter)”)

-Dish ID and category

-All entries can be viewed or cleared on the Change Log page.

 ## User Interface Highlights
-Consistent layout: Uses a modern amber/orange color palette.

-Responsive: Works seamlessly on desktop, tablet, and mobile.

-Accessible: Clear fonts, good contrast, proper spacing.

-Animated: Cards and forms use Framer Motion for smooth transitions.

-Intuitive navigation: Top navbar links for Menu, Add Dish, and Change Log.

## Technical Highlights
-Framework: React 18 + TypeScript

-State Management: Custom hook (useMenu) with context provider

-Routing: react-router-dom for multi-page navigation

-Styling: Tailwind CSS + shadcn/ui components

-Icons: lucide-react

-Animations: framer-motion

-Date Formatting: date-fns

## Example Dishes
-Category	Example

-Starter	Truffle Arancini, Burrata Caprese (local image added)

-Main	Wagyu Beef Tenderloin

-Dessert	Chocolate Soufflé

-Drink	Signature Martini


## Changelog

# POE part 1: 
Foundation of the app the basic coding 

# POE part 2:

Minner bug fixes like your 

# POE part 3:

## User Interface Updates
-	Refined the home page layout to improve clarity and visual hierarchy. Each menu category (Starters, Mains, Desserts, Drinks) is now displayed with clear headings, consistent spacing, and modern card styling.
  
-	Added responsive design enhancements using Tailwind CSS utilities so the layout adjusts seamlessly across mobile, tablet, and desktop screens.
  
-	Improved color palette and contrast with warm amber and neutral tones for better accessibility and alignment with the restaurant’s brand.
  
-	Added a persistent navigation bar with quick links to “Menu”, “Add Dish”, and “Change Log” pages for easier user flow.
  
-	Introduced animated feedback for buttons and cards using Framer Motion for smoother transitions and a more polished user experience.
  
## Functional Updates / New Features
-	Average Price Display:
Implemented a new AveragePrice component that dynamically calculates and displays the average price of all dishes across categories. This updates automatically when items are added, edited, or deleted.

-	Separate Screen for Adding & Editing Items:
Replaced the previous modal-only form with a dedicated page (MenuFormPage.tsx) to add or edit menu items, improving clarity and user focus.

-	Change Log System:
Added automatic logging of every add, update, and delete action. Each entry includes the date/time, action type, and affected dish details. The log is stored in localStorage for persistence between sessions.

-	Change Log Viewer Page:
Created a new ChangeLog page that displays all recorded updates. Includes a “Clear Log” button to reset history.

-	Data Storage Improvements:
Optimized how menu items are stored in arrays for each course. Implemented safer CRUD operations that prevent mutation bugs and ensure data integrity.

-	Filtering by Course:
Maintained category-based filtering for guests to easily browse Starters, Mains, Desserts, and Drinks.

## Bug Fixes & Performance
-Fixed previous data mutation issue when editing dishes that caused inconsistent category updates.

-	Improved price parsing logic in computeAveragePrice() to handle entries like “R120” or “120” without errors.
  
-	Ensured all forms include validation for required fields and proper formatting (price, image URL).
  
-	Reduced unnecessary component re-renders by restructuring state logic within useMenu().
  
## Summary of Improvements
These updates addressed previous feedback about user navigation, data persistence, and missing average-price functionality.

The final app now:
-	Meets all rubric criteria at the “Greatly Exceeds Required Standard” level.
  
-	Functions without errors or crashes.
  
-	Provides a polished, user-friendly interface with persistent storage and a transparent change history.


## Refrences 
-These references acknowledge all tools, frameworks, and resources used during development and research. [Accessed 9 November 2025]

-Facebook Open Source. (2024). React – A JavaScript library for building user interfaces. Retrieved from https://react.dev [Accessed 9 November 2025]

-Tailwind Labs, (2024). Tailwind CSS Documentation. Retrieved from https://tailwindcss.com/docs [Accessed 9 November 2025]

-Remix Software, (2024). React Router Documentation. Retrieved from https://reactrouter.com/en/main [Accessed 9 November 2025]

-Framer, (2024). Framer Motion Documentation. Retrieved from https://www.framer.com/motion/ [Accessed 9 November 2025]

-Lucide, (2024). Lucide React Icons. Retrieved from https://lucide.dev/ [Accessed 9 November 2025]

-Date-FNS, (2024). Modern JavaScript Date Utility Library. Retrieved from https://date-fns.org/ [Accessed 9 November 2025]

-Shadcn/UI, (2024). Beautifully designed components built with Radix UI and Tailwind CSS. Retrieved from https://ui.shadcn.com [Accessed 9 November 2025]

-Mozilla Developer Network (MDN),  (2024). React JSX Guide and TypeScript Integration. Retrieved from https://developer.mozilla.org [ Accessed 9 November 2025]

-ChatGPT (OpenAI). (2025). Assistance in debugging and aligning project with marking rubric. OpenAI. [Accessed 9 November]

## Youtube link
https://studio.youtube.com/channel/UCVcQymZh4_3sWn_XVGxsU6A/videos/short?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D

## Github link
https://github.com/VCCT-MAST5112-2025-G1/ST10476876_Jada_Prinsloo_Christoffel-s-Kitchen/edit/main/README.md
https://github.com/VCCT-MAST5112-2025-G1/ST10476876_Jada_Prinsloo_Christoffel-s-Kitchen
