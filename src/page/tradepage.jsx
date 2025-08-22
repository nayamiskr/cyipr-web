import Navbar from "../components/Navbar";
import Tradecard from "../components/tradeCard";
import './tradepage.css';

function Tradepage() {
    return (
        <div className="trade-page">
            <Navbar />
            <div className="trade-content">
                <span className="title">首先一起來了解一下商標</span>
                <div className="trade-card-section">
                    <Tradecard ques={"什麼是『商標』?"} ans={"答：「商標」指用以區別與他人商品商標或服務商標的標誌，商標的型態可能為包裝設計、立體實物、聲音，甚至為氣味等。我國規定，商標可以由文字、圖形、記號、顏色、聲音、立體形狀、動態、全像圖等，或其聯合式所組成的任何標誌。"} />
                    <Tradecard ques={"為什麼要註冊商標 ?"} ans={"答：我國商標制度是以註冊保護為原則，商標依法申請註冊取得商標權後，商標權人除可以自己使用及授權他人使用外，還可以排除他人以相同或近似的商標指定使用於同一或類似商品／服務註冊。如果他人未經商標權人同意使用該商標，而有侵害商標權或有侵害商標權之虞的情形，商標權人可以請求排除或防止侵害，對於故意或過失侵害商標權的人，還可以請求損害賠償。"} />
                    <Tradecard ques={"什麼是『團體商標』?"} ans={"答：「團體商標」指具有法人資格的公會、協會或其他團體，如農會、漁會等，為指示其會員所提供之商品或服務，並藉以與非該團體會員所提供之商品或服務相區別之標識。"} />
                    <Tradecard ques={"什麼是『團體標章』?"} ans={"答：「團體標章」指具有法人資格之公會、協會或其他團體，如獅子會、扶輪社等，為表彰其會員之會籍，並藉以與非該團體會員相區別之標識。團體標章不是在商業或交易上使用於商品或服務，而是用以表彰特定團體的會員身分。"} />
                    <Tradecard ques={"什麼是『證明標章』?"} ans={"答：「證明標章」係用以證明他人商品或服務之特性、品質、精密度、產地或其他事項的標誌，如一般消費者熟悉的台灣精品標誌、UL 電器安全、ST 玩具安全標誌等。證明標章申請人必須以具有證明他人商品或服務能力的法人、團體或政府機關為限。"} />
                </div>
            </div>
        </div>
    );
}

export default Tradepage;