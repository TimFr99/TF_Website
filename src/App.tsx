import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingButton from './components/ui/FloatingButton';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';
import Terms from './pages/Terms';
import Liability from './pages/Liability';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  const isLegalPage = ['/datenschutz', '/impressum', '/agb', '/haftungsausschluss'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header isLegalPage={isLegalPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenschutz" element={<Privacy />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/agb" element={<Terms />} />
        <Route path="/haftungsausschluss" element={<Liability />} />
      </Routes>
      <Footer />
      <FloatingButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
