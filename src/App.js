import { Route, Routes } from 'react-router-dom';

import './App.css';

import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import UserList from './pages/UserList';


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;