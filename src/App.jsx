import './App.css';
import LoginForm from './assets/components/LoginForm/LoginForm.jsx';
import Home from './assets/components/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
