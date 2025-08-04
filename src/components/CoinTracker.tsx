import React, { useEffect, useState } from 'react';

const CoinTracker: React.FC = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const updateCoins = () => {
      const storedCoins = Number(localStorage.getItem('coins') || '0');
      setCoins(storedCoins);
    };

    updateCoins(); // initial load

    window.addEventListener('coinsUpdated', updateCoins);
    return () => window.removeEventListener('coinsUpdated', updateCoins);
  }, []);

  return (
    <div className="flex items-center gap-2 text-yellow-400 font-semibold select-none">
      <img src="/coin.jpeg" alt="Coin" className="w-6 h-6" />
      <span>{coins}</span>
    </div>
  );
};

export default CoinTracker;
