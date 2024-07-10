import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App(){
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>  
      <Routes> //meka athule tika thami page ekn ekt wens wenne
        <Route path="/" element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
