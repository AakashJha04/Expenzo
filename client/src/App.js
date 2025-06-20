import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />}/>
        <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export function ProtectedRoutes(props){
  if(localStorage.getItem('expenzo-user')){
    return props.children;
  }else{
    return <Navigate to='/login'/>
  }
}


export default App;
