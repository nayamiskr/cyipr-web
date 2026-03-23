import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './welcomePage.css';
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Showcase from '../components/showcase';

export default function WelcomePage() {
    const [closeLogo, setCloseLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCloseLogo(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className='wel-contact'>
                <Navbar />
                <img src="./image/welcome.jpg" alt="Welcome" className="wel-img" />
                <div className="wel-hero">
                    {closeLogo ? (
                        <div className='wel-logo'>
                            <img src="/image/cyiprLogo.png" alt="CYIPR Logo" />
                            <h1>智慧  就是力量</h1>
                            <h1 style={{ margin: "0px" }}>專業  能成為別人夢想</h1>
                        </div>
                    ) : 
                    (<div className='showcase'>
                        <Showcase/>
                    </div>)
                    }

                    <h3>歡迎聯絡我們一同守護您的招牌</h3>
                    <div className="contact">
                        <a href="https://www.facebook.com/cyipradmin" className="facebook">
                            <FaFacebookF />
                            <span>長盈國際商標事務所</span>
                        </a>
                        <a href="https://maps.app.goo.gl/anSdNEhuFND86ZCR7" className="map">
                            <FaMapMarkerAlt />
                            <span>長盈國際商標事務所</span>
                        </a>
                        <a href="tel:0910767899" className="phone">
                            <FaPhoneAlt />
                            <span>0910767899</span>
                        </a>
                        <a href="mailto:cyipr@seed.net.tw" className="email">
                            <MdEmail />
                            <span>cyipr@seed.net.tw</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}