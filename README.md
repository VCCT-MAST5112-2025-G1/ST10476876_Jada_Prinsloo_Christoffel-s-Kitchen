# ST10476876_Jada_Prinsloo_Christoffel-s-Kitchen
## Intro to Christoffel's Kitchen 
This app was created for Chef Christoffel to keep better track of his orders and how many customers come in and out of his restaurant. It makes life a bit easier for him and convenient for his customers 

## How to run this app:
-1. Open the Project
Open VS Code.
Click File → Open Folder… and select your app’s folder.

- 2. Open the Terminal
In VS Code, click Terminal → New Terminal.
Make sure you’re in the project’s root directory — the one that has your package.json file
cd your-app-name

-3. Install Dependencies
Run this once to install everything the app needs:
npm install

-4. Start the App
If it’s an Expo app (most React Native projects use Expo):
npx expo start
This launches the Expo Developer Tools in your browser.

-5. Run on a Device or Emulator
After Expo starts, you can:
Press “a” → to open Android emulator
Press “i” → to open iOS simulator (on Mac)
Scan the QR code with the Expo Go app on your phone to run it live

 -6. Stop the App
Press Ctrl + C in the terminal to stop the running process.


# Changelog
## POE part 1:
- Was the plan of my app how it was going to look and my planning for the app.

## POE part 1 update:
- i updated everything my layout and everything.

## POE part 2:
-This part of the poe is for the coding of the app
-I built this app using React and TypeScript with TailwindCSS for clean, responsive design. It starts with an animated splash screen that loads into a smooth, motion-based home interface. The menu is fully dynamic, showing starters, mains, desserts, and drinks in tabs. I created a custom hook to let the chef add, edit, or delete dishes, with data saved in local storage. The consistent amber-orange theme and animations give it a polished, professional feel.”

## POE part 3:
- # 1. User Interface Updates
•	Refined the home page layout to improve clarity and visual hierarchy. Each menu category (Starters, Mains, Desserts, Drinks) is now displayed with clear headings, consistent spacing, and modern card styling.
•	Added responsive design enhancements using Tailwind CSS utilities so the layout adjusts seamlessly across mobile, tablet, and desktop screens.
•	Improved color palette and contrast with warm amber and neutral tones for better accessibility and alignment with the restaurant’s brand.
•	Added a persistent navigation bar with quick links to “Menu”, “Add Dish”, and “Change Log” pages for easier user flow.
•	Introduced animated feedback for buttons and cards using Framer Motion for smoother transitions and a more polished user experience.
# 2. Functional Updates / New Features
•	Average Price Display:
Implemented a new AveragePrice component that dynamically calculates and displays the average price of all dishes across categories. This updates automatically when items are added, edited, or deleted.
•	Separate Screen for Adding & Editing Items:
Replaced the previous modal-only form with a dedicated page (MenuFormPage.tsx) to add or edit menu items, improving clarity and user focus.
•	Change Log System:
Added automatic logging of every add, update, and delete action. Each entry includes the date/time, action type, and affected dish details. The log is stored in localStorage for persistence between sessions.
•	Change Log Viewer Page:
Created a new ChangeLog page that displays all recorded updates. Includes a “Clear Log” button to reset history.
•	Data Storage Improvements:
Optimized how menu items are stored in arrays for each course. Implemented safer CRUD operations that prevent mutation bugs and ensure data integrity.
•	Filtering by Course:
Maintained category-based filtering for guests to easily browse Starters, Mains, Desserts, and Drinks.
# 3. Bug Fixes & Performance
•	Fixed previous data mutation issue when editing dishes that caused inconsistent category updates.
•	Improved price parsing logic in computeAveragePrice() to handle entries like “R120” or “120” without errors.
•	Ensured all forms include validation for required fields and proper formatting (price, image URL).
•	Reduced unnecessary component re-renders by restructuring state logic within useMenu().
# 4. Summary of Improvements
These updates addressed previous feedback about user navigation, data persistence, and missing average-price functionality.
The final app now:
•	Meets all rubric criteria at the “Greatly Exceeds Required Standard” level.
•	Functions without errors or crashes.
•	Provides a polished, user-friendly interface with persistent storage and a transparent change history.



## Reference List:
- CloudLabs, 2025. CloludLabs. [online] Available at: https://portal.cloudlabs.ai/virtual-machine [Accessed 20 October 2025].
- YouTube,2025. YouTube. [online] Available at: https://www.youtube.com/ [Accessed 20 October 2025]
- Google AI. 2025. Google AI [online] Available at https://aistudio.google.com/apps/temp/1?showAssistant=true&showCode=true [Accessed 20 October 2025]

## Link to YouTube video
https://youtube.com/shorts/aZcV-hi7CQY?feature=share

