// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TodaysMenu } from "./TodaysMenu";
import { MenuFormPage } from "./MenuFormPage";
import { ChangeLog } from "./ChangeLog";
import { useMenu } from "./useMenu";

export default function App() {
  const menu = useMenu();

  return (
    <menuContext.Provider value={menu}>
      <BrowserRouter>
        <div className="min-h-screen">
          <header className="bg-amber-800 text-white p-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Christoffel's Kitchen</h1>
            <nav className="flex gap-3">
              <Link to="/" className="underline">
                Menu
              </Link>
              <Link to="/add" className="underline">
                Add Dish
              </Link>
              <Link to="/changelog" className="underline">
                Change Log
              </Link>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<TodaysMenu />} />
              <Route path="/add" element={<MenuFormPage />} />
              <Route path="/edit/:category/:id" element={<MenuFormPage />} />
              <Route path="/changelog" element={<ChangeLog />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </menuContext.Provider>
  );
}

/**
 * Simple context so components can access the hook data easily.
 * This pattern avoids prop-drilling for the sample project.
 */
import type { useState, useEffect } from 'react'; 
import type * as UM from "./useMenu";
export const menuContext = React.createContext<ReturnType<typeof useMenu> | null>(null);

export function useMenuContext() {
  const ctx = React.useContext(menuContext);
  if (!ctx) throw new Error("useMenuContext must be used inside a provider");
  return ctx;
}

