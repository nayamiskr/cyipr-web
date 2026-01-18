import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage.jsx';
import Tradepage from './page/tradepage.jsx';
import CommentPage from './page/commentPage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trade" element={<Tradepage />} />
          <Route path="/comment" element={<CommentPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
