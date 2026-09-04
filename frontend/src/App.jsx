import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Explore from "./pages/Explore";
import CareerExplorer from "./pages/CareerExplorer";
import CareerDetail from "./pages/CareerDetail";
import CareerQuiz from "./pages/CareerQuiz";
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import Courses from "./pages/Courses";
import CompareCareers from "./pages/CompareCareers";
import Roadmap from "./pages/Roadmap";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import WhatsAppButton from "./components/WhatsAppButton";

const AppContent = ({ loading, setLoading }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen selection:bg-[var(--coral)] selection:text-[var(--white)] bg-[var(--ivory)] text-[var(--ink)]">
      <ScrollToTop />
      <Cursor />
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Nav />
          <div className={isHome ? "" : "pt-28"}>
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/careers" element={<CareerExplorer />} />
              <Route path="/careers/:id" element={<CareerDetail />} />
              <Route path="/quiz" element={<CareerQuiz />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/colleges/:id" element={<CollegeDetail />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/compare" element={<CompareCareers />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    </Router>
  );
};

export default App;
