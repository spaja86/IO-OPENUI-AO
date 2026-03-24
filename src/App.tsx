import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GamesPage from './pages/GamesPage';
import ChatPage from './pages/ChatPage';
import VideoPage from './pages/VideoPage';
import ChatbotWidget from './components/ChatbotWidget';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/ui/BackToTop';
import { ToastProvider } from './components/Toast';
import { LanguageProvider } from './hooks/useLanguage';
import { useScrollProgress } from './hooks/useScrollAnimation';

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
        zIndex: 9999,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}

function AppInner() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ChatbotWidget />
      <CookieConsent />
      <BackToTop />
    </BrowserRouter>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <AppInner />
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;
