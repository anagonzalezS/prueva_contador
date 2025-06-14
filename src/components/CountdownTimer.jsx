import  { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar el componente
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  function formatTime() {
    const { days, hours, minutes, seconds } = timeLeft;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div>
      {Object.keys(timeLeft).length ? (
        <p>Tiempo restante: {formatTime()}</p>
      ) : (
        <p>¡Tiempo terminado!</p>
      )}
    </div>
  );
}

export default CountdownTimer;