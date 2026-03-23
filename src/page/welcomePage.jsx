import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './welcomePage.css';
import Showcase from '../components/showcase';
import ContactSection from '../components/contactSection';

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

                    <ContactSection/>
                </div>
            </div>
        </div>
    );
}