import './Hero.css'

export default function Hero({image , title , description , btn}) {
  return (
    <div className='hero'>
        <img src={image.src} alt={image.alt} />
        <div className="info">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className={(btn.visible)? " " : "hidden"}>{btn.label}</button>
        </div>
    </div>
  )
}
