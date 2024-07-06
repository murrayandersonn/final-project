import Nring from './components/Nring';
import Homepage from './components/Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
   <div style={{backgroundColor: "#36454F"}}>
    <Link to="/" >Home</Link>
    <Link to="/nring">Nürburgring</Link>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/nring' element={<Nring />} />
    </Routes>
   </div>
  );
}

export default App;
