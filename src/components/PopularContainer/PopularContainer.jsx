import './PopularContainer.css'
export default function PopularContainer({title , desc , firstImage , secImage , reverse }) {
    return (
        <div className={`PopularContainer ${reverse}`}>
            <div className="info">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="images">
                <img src={firstImage} alt="" />
                <img src={secImage} alt="" />
            </div>
        </div>
    )
}
