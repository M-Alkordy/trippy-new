import './RecentTrips.css'
import firstImage from './../../assets/img/1.jpg'
import secImage from './../../assets/img/2.jpg'
import thirdImage from './../../assets/img/3.jpg'
import Card from '../Card/Card'
import Conteiner from '../Container/Conteiner'
export default function Recent() {
    const cards = [
        {
            image: firstImage,
            title: "Trip in Indonesia",
            desc: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
        },
        {
            image: secImage,
            title: "Trip in Malaysia",
            desc: "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
        },
        {
            image: thirdImage,
            title: "Trip in France",
            desc: "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
        },
    ]
    return (
        <div className='Recent'>
            <h1 className="title">Recent Trips</h1>
            <p className='desc'> You can discover unique destination using Google Maps.</p>
            <Conteiner>
                {cards.map((element , index)=>{return(
                    <Card key={index} image= {element.image} title = {element.title} desc={element.desc} />
                )})}
            </Conteiner>
        </div>
    )
}
