import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path={'/Login'} element={<Login/>}></Route>
          <Route path={'/Signup'} element={<Signup/>}></Route>
         </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
