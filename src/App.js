import Home from './Pages/home/Home';
import './App.css';
import Header from './Components/Header/Header';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Contact />
    </div>
  );
}

export default App;
