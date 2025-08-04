import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'; 
import Footer from './components/Footer';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import ModulePage from './pages/Module';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) return <SplashScreen onFinish={() => setShowSplash(false)} />;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Lesson/:id" element={<Lesson />} />
        <Route path="/Lesson/:id/quiz" element={<Quiz />} />
        <Route path="/modules/understanding-home-inspections" element={<ModulePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
