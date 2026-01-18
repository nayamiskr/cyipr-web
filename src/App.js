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
          <Route path="/cyipr-web/" element={<Homepage />} />
          <Route path="/cyipr-web/trade" element={<Tradepage />} />
          <Route path="/cyipr-web/comment" element={<CommentPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
