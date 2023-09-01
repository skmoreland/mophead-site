import AppRouter from './AppRouter'
import { HashRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <HashRouter baseline="/">
      <div className="App">
        <AppRouter />
      </div>
    </HashRouter>
  );
}

export default App;
