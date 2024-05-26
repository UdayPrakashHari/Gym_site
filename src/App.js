
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './nav';
import Home from './home';
import About from './about'
import Blog from './blog'
import Facility from './facility'
import Contact from './contact'

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/facility' element={<Facility/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
