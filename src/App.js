import NavBar from './components/NavBar/NavBar';
import AppRouter from './AppRouter'
import { HashRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <HashRouter baseline="/">
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </HashRouter>
  );
}

export default App;
