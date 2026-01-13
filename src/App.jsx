import { useState } from 'react';
import './App.css';
import './styles/global.css';
import Hero from './components/Hero/Hero';
import MagicModal from './components/MagicModal/MagicModal';
import OrderSection from './components/OrderSection/OrderSection';
import murphyResponses from './data/murphy-responses.json';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');

  const getRandomResponse = () => {
    const { responses } = murphyResponses;
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex].text;
  };

  const handleBoop = () => {
    const response = getRandomResponse();
    setCurrentResponse(response);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Hero onBoop={handleBoop} />
      <MagicModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        response={currentResponse}
      />
      <OrderSection />
    </div>
  );
}

export default App;
