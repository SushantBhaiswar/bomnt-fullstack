import Login from './components/login/login';
import Register from './components/Register/Register';
import Header from "./components/header/header"
import Createbook from "./components/Createbook/createbook"
import Home from './components/Home/home';
import Reviewbook from './components/Review/Reviewbook';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux';
function App() {
  const AuthorToken = localStorage.getItem("AuthorToken")
  const UserToken = localStorage.getItem("UserToken")
  const { user, isAuthenticated } = useSelector((state) => state)
  // AuthorToken || UserToken ? window.location.reload() : null 
  return (

    <BrowserRouter>
      {isAuthenticated ? <Header /> : null}
      <Routes>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/reviewbook' element={<Reviewbook />} ></Route>
        <Route path='/createbook' element={<Createbook />} ></Route>
        <Route path='/register' element={<Register />} >  </Route>
        <Route path='/' element={<Home />} >  </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
