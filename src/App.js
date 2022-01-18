import './App.css';
import Trends from './components/Trends';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
         GitHub Trends
        </p>
      </header>
      <section className='app-container'>
        <Trends/>
      </section>
    </div>
  );
}

export default App;
