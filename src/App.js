import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Signup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
