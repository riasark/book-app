import './App.css';
import Login from './components/Login';

function App() {
  return (
    <main>
      <div className='header'>
        <h1>
          Book <span className='hspan'> Best Friend </span>
        </h1>
        <div>
          <button className='signbtn'>
          Sign Up
          </button>
        </div>
      </div>
      <div className='login'>
        <Login>
        </Login>
      </div>
    </main>
  );
}

export default App;
