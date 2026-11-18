import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/sections/Header';
import { Footer } from './components/sections/Footer';
import { HomePage } from './pages/HomePage';
import { EmployeesPage } from './pages/EmployeesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral ambient-glow min-h-screen text-gray-100 flex flex-col justify-between selection:bg-primary selection:text-neutral">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
