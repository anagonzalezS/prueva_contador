import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-07-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return <h2>🎉 ¡Feliz cumpleaños!</h2>;

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "4rem" }}>
      <h1>🎂 Cuenta Regresiva</h1>
      <p>
        {timeLeft.days} días {timeLeft.hours} hs {timeLeft.minutes} min {timeLeft.seconds} seg
      </p>
    </div>
  );
};

export default Countdown;
