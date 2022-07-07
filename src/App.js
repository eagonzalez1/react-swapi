import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllStarships />}/>

      </Routes>
    </>
  );
}

export default App;
