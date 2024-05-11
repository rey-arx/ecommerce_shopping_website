import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import Category from './Components/Category/Category';
import Featured from './Components/Category/Featured';
function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Category />
      <Featured />
    </div>
    // <p>hi</p>

  );
}

export default App;
