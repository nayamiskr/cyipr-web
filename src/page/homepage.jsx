import './homepage.css';
import Navbar from "../components/Navbar";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Showcase from '../components/showcase';

function Homepage() {
    return (
        <div class="homepage">
            <div class="content" >
                <div class="hero">
                    <img src="/image/cyiprLogo.png" alt="CYIPR Logo" className="logo" />
                    <div className="hero-text">
                        <h1 style={{ fontSize: '56px' }}>歡迎來到長盈商標事務所</h1>
                        <p>智慧  就是力量</p>
                        <p className="text-right">專業  能成為別人夢想</p>
                    </div>
                </div>

                <div className="service">
                    <div className="service-bg">
                        <span className="service-prefix">我們的服務項目：</span>
                        <div className="dropping-texts">
                            <div>商標申請</div>
                            <div>著作權</div>
                            <div>商品條碼</div>
                        </div>
                    </div>
                </div>

                <div className="case-share">
                    <Showcase />
                </div>

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
    );
}

export default Homepage;