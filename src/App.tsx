import React from "react";
import { Header } from "./componentes/Header/Header.tsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./componentes/Home/Home.tsx";
import Sobre from "./componentes/Sobre/Sobre.tsx";
import Projetos from "./componentes/Projetos/Projetos.tsx";
import Footer from "./componentes/Footer/Footer.jsx";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/sobre" element={<PageWrapper><Sobre /></PageWrapper>} />
        <Route path="/projetos" element={<PageWrapper><Projetos /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
