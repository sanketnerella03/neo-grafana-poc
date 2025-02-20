import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { faro } from '@grafana/faro-web-sdk';

function App() {

  const myMethod = () => {
    throw new Error('My Custom error');
  }

  const customSignal = () => {
    faro.api.pushLog(['This is a log with context'], {
      context: {
        randomNumber: `${Math.random()}`,
      },
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {console.error('adding count');}}>
          Simple console error
        </button>
        <button onClick={() => {myMethod();}}>
          throw custom error
        </button>
        <button onClick={() => {customSignal();}}>
          push custom signal
        </button>
      </div>
    </>
  )
}

export default App
