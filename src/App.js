import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage.jsx';
import Tradepage from './page/tradepage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/cyipr-web">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trade" element={<Tradepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
