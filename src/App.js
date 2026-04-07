import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PatentOfficePage from './page/patentOfficePage.jsx';
import Tradepage from './page/tradepage.jsx';
import CommentPage from './page/commentPage.jsx';
import WelcomePage from './page/home/welcomePage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/PO" element={<PatentOfficePage />} />
          <Route path="/trade" element={<Tradepage />} />
          <Route path="/comment" element={<CommentPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
