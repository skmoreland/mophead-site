import AppRouter from './AppRouter'
import { HashRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <HashRouter baseline="/">
      <div className="App">
        <AppRouter />
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
