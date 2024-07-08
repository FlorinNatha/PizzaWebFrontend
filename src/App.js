import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App(){
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>  
      <Routes> //meka athule tika thami page ekn ekt wens wenne
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
