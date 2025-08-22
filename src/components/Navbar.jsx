import './Navbar.css';
import { AiOutlineBars } from "react-icons/ai";
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='nav'>
            <img src="/image/logo.png" alt="Logo" className="logo" />
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)} >
                <AiOutlineBars />
            </div>
            <ul className={`navLinks ${menuOpen ? 'open' : ''}`}>
                <li><a href="/cyipr-web" className='link'>首頁</a></li>
                <li><a href="/cyipr-web/trade" className='link'>商標申請</a></li>
                <li><a href="/PO" className='link'>各國專利局</a></li>
                <li><a href="/example" className='link'>客戶案例</a></li>
                <li><a href="/comment" className='link'>留言中心</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
