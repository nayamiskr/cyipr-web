import './showcase.css';

const cases1 = [
    "/image/case/凡立橙公司.jpg",
    "/image/case/台南市觀光旅遊局.jpg",
    "/image/case/哞熹.jpg",
    "/image/case/善化胡麻.jpg",
    "/image/case/幸町 - 複製.jpg",
    "/image/case/張宣福居.jpg",
    "/image/case/招牌-01.jpg",
    "/image/case/新南糖廠.jpg",
    "/image/case/樂兒屋.jpg",
    "/image/case/白寶奶奶港式菠蘿包 白寶.jpg",
    "/image/case/第一站(正).jpg"
]

const cases2 = [
    "/image/case/英文及圖紅磚布丁.jpg",
    "/image/case/邱家小卷米粉.jpg",
    "/image/case/郭綜合.jpg",
    "/image/case/金星雙糕潤.jpg",
    "/image/case/關廟鳳梨.jpg",
    "/image/case/阿櫃銅鑼燒.jpg",
    "/image/case/雨傘HOTEL HI.jpg",
    "/image/case/頤真炸雞.jpg",
    "/image/case/顧阿家牛肉湯.png",
    "/image/case/飯賣人口.jpg",
    "/image/case/麻豆文旦.jpg",
    "/image/case/龜龜毛毛logo-新 - 複製.jpg",
]

function Showcase() {
    const reel1 = [...cases1, ...cases1];
    const reel2 = [...cases2, ...cases2];
    return (
        <div className="showcase">
            <h1>
                我們輝煌的成績
            </h1>
            <div className='reel'>
                {reel1.map((src, index) => (
                    <img src={src} alt={`Case ${index + 1}`} loading='lazy' />
                ))}
            </div>
            <div className='reel'>
                {reel2.map((src, index) => (
                    <img src={src} alt={`Case ${index + 1}`} loading='lazy'/>
                ))}
            </div>
        </div>
    );
}

export default Showcase;