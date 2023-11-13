import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'

import Contato from './components/pages/Contato'

import Company from './components/pages/Company'

import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

import NavBar from './components/layout/NavBar'

import Footer from './components/layout/Footer'

import Projects from './components/pages/Projects'

function App() {
  return (
   <Router>
   
   <NavBar/>
    
    <Container customClass= 'min-height'>

    <Routes>

      <Route exact path='/' element={<Home/>}></Route>

      <Route exact path='/contato' element={ <Contato/>}></Route>

      <Route exact path='/company' element={ <Company/>}></Route>

      <Route exact path='/newproject' element={ <NewProject/>}></Route>

      <Route exact path='/projects' element={ <Projects/>}></Route>

    </Routes>
    </Container>

    <Footer/>
   </Router>
  );
}

export default App;
