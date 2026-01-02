import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EDA from './pages/EDA';
import GradientBoosting from './pages/GradientBoosting';
import Prediction from './pages/Prediction';
import Disclaimer from './pages/Disclaimer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eda" element={<EDA />} />
            <Route path="/gradient-boosting" element={<GradientBoosting />} />
            <Route path="/predict" element={<Prediction />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
