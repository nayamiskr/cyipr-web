import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage.jsx';
import Tradepage from './page/tradepage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cyipr-web/" element={<Homepage />} />
          <Route path="/cyipr-web/trade" element={<Tradepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
