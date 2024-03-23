import './Card.css'
export default function Card({image , title , desc}) {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}
