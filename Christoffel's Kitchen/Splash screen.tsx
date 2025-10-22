import React, { useState, useEffect } from 'react';
import SplashScreen from './splash-screen';
import './splash-screen.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {showSplash && <SplashScreen />}
      <main className="main-content">
        <h1>Welcome to Christoffel's Kitchen</h1>
        <p>Your menu app is ready!</p>
      </main>
    </div>
  );
};

export default App;

