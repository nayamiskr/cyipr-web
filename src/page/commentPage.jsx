import "./commentPage.css"
import Navbar from "../components/Navbar";
import { useState } from "react";

function CommentPage() {
    const [showInput, setShowInput] = useState(false); 

    return (
        <div className="commentPage">
            <Navbar />

            <div className="content">
                <div className="title">將你們的問題或想法寫出來</div>
                <div className="question-section">
                    <button className="question-btn" onClick={() => setShowInput(!showInput)}>
                        我要提問
                    </button>
                    <div className={`question-input${showInput ? ' show' : ''}`}>
                        <input className="title-input" type="text" placeholder="留言主題" />
                        <input className="name-input" type="text" placeholder="請輸入名稱" />
                        <input className="email-input" type="email" placeholder="請輸入信箱" />
                        <input className="lineID-input" type="text" placeholder="請輸入LineID" />
                        <input className="phone-input" type="tel" placeholder="請輸入電話" />
                    </div>
                </div>

                <div className="comment-section">
                    <div className="comment-card">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentPage;