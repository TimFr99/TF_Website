import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingButton from './components/ui/FloatingButton';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';
import Terms from './pages/Terms';
import Liability from './pages/Liability';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'privacy':
        return <Privacy onNavigate={setCurrentPage} />;
      case 'imprint':
        return <Imprint onNavigate={setCurrentPage} />;
      case 'terms':
        return <Terms onNavigate={setCurrentPage} />;
      case 'liability':
        return <Liability onNavigate={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  const isLegalPage = ['privacy', 'imprint', 'terms', 'liability'].includes(currentPage);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} isLegalPage={isLegalPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
      <FloatingButton />
    </div>
  );
}

export default App;
