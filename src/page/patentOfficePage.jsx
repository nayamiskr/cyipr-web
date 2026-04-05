import './patentOfficePage.css';
import Navbar from "../components/Navbar";
import FilpCard from '../components/filpCard';

export default function PatentOfficePage() {

    const PO = [
        {
            label: "台灣智慧財產局",
            pic: "/image/PO/TIPO.jpg",
            link: "https://www.tipo.gov.tw/"
        },
        {
            label: "香港特別行政區政府知識產權署",
            pic: "/image/PO/HKPI.png",
            link: "http://www.ipd.gov.hk"
        },
        {
            label: "中華人民共和國國家知識產權局",
            pic: "/image/PO/CNPI.png",
            link: "http://www.cnipa.gov.cn/"    
        },
        {
            label: "日本專利局",
            pic: "/image/PO/JPO.jpg",
            link: "http://www.jpo.go.jp"
        },
        {
            label: "南韓專利局(KIPO)",
            pic: "/image/PO/KIPO.jpg",
            link: "http://www.kipo.go.kr"
        },
        {
            label: "美國專利商標局",
            pic: "/image/PO/USPTO.png",
            link: "http://www.uspto.gov/"    
        }   
    ]

    return (
        <div class="patentOfficePage">
            <Navbar />
            <div class="content" >
                <h3>
                    點擊圖標前往網站。
                </h3>
                <div className='card-section'>
                    {PO.map((po, index) => (
                    <div key={index}>
                        <FilpCard front={
                            <div className='card-front'>
                                <img src={po.pic} alt={po.label} className='card-image' />
                                <span className='card-label'>{po.label}</span>
                            </div>
                        } back={
                        <a href={po.link} target="_blank" className='card-back'>
                            點擊並前往{po.link}
                        </a>} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
