import './contactSection.css'
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
    return (
        <div>
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
    )
}