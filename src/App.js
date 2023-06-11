import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './components/login/loginPage';
import { Button } from 'bootstrap';
import Navg from './components/header/navg';
import Doclist from './components/list/doclist';
import VideoCall from './components/videocall/videocall';

function App() {
  return (
    <div className="App">
      <LoginPage />
      
    </div>
  );
}

export default App;
