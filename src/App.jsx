import React from "react";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";

const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        {children}
        <div className="flex h-screen overflow-hidden relative z-0 md:h-screen">
          <Sidebar
            collapsed={collapsed}
            sidebarOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            activePage={activePage}
            onChangePage={(page) => {
              setActivePage(page);
              setSidebarOpen(false);
            }}
          />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header
              sidebarCollapsed={collapsed}
              onToggleSidebar={() => {
                // on small screens toggle mobile drawer, on md+ toggle collapse
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  setSidebarOpen((s) => !s);
                } else {
                  setCollapsed((c) => !c);
                }
              }}
            />
            <main className="flex-1 overflow-y-auto p-2 sm:p-4 lg:p-6 bg-transparent text-white">
              <div className="max-w-full lg:max-w-7xl mx-auto">
                {activePage === "dashboard" && <Dashboard />}
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
