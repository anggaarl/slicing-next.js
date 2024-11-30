"use client";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-16 bg-grey"></div>
      <div className="flex bg-grey">
        <Sidebar />
        <div className="flex-1">
        <Dashboard />
        <Footer />
        </div>
      </div>
    </main>
  );
}
