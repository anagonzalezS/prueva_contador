import CountdownTimer from './components/CountdownTimer';

function App() {
  const targetDate = "2025-12-25T00:00:00"; // Reemplaza con tu fecha objetivo

  return (
    <div>
      <h1>Cuenta Regresiva</h1>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;