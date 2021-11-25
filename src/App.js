import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route ,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Product from './Components/Product';
import Items from './Components/Items';


function App() {
  return (
<div className="App">
  {/* <Home/> */}
  <BrowserRouter> 
     <Header />   
      <Routes> 
          <Route path='/Home' element={<Home/>} />
          <Route path='/About'  element={ <About />}/>
          <Route path='/Contact'  element={ <Contact />}/>
          <Route path='/Services'  element={ <Services />}/>
          <Route path='/Product'  element={ <Product />}/>
          <Route path='/Items'  element={ <Items />}/> 
      </Routes> 
          <Footer/>
  </BrowserRouter>
</div>
  );
}

export default App;
