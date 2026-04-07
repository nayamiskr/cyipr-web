import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./welcomePage.css";
import Showcase from "../../components/showcase";
import ContactSection from "../../components/contactSection";

export default function WelcomePage() {
  const [closeLogo, setCloseLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCloseLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="wel-content">
      <Navbar />
      <img src="./image/welcome.jpg" alt="Welcome" className="wel-img" />
      
      {closeLogo ? (
        
        <div className="wel-hero">
          <div className="wel-logo">
            <img src="/image/cyiprLogo.png" alt="CYIPR Logo" />
            <h1>智慧 就是力量</h1>
            <h1 style={{ margin: "0px" }}>專業 能成為別人夢想</h1>
          </div>
        </div>

      ) : (
        
        <main className="scroll-content">
          <section className="scroll-page">
            <div className="showcase">
              你好
            </div>
          </section>
          
          <section className="scroll-page">
            <div className="showcase">
              不好
            </div>
          </section>
          
          <section className="scroll-page">
            <div className="showcase">
              <Showcase />
            </div>
          </section>
        </main>

      )}

      <ContactSection />
    </div>
  );
}