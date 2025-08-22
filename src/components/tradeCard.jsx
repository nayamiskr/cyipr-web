import './tradeCard.css';

function Tradecard({ ques, ans }) {
    return (
        <div className="trade-card">
            <div className="card">
                <div className="front"><span>{ques}</span></div>
                <div className="back"><span>{ans}</span></div>
            </div>

        </div>
    );
}

export default Tradecard;