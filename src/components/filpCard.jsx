import './filpCard.css';

export default function FilpCard({ front, back }) {
    return (
        <div className="filp-card">
            <div className="card">
                <div className="front"><span>{front}</span></div>
                <div className="back"><span>{back}</span></div>
            </div>

        </div>
    );
}
