import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import './Home.css'
import bg from './../../assets/img/homeHero.jpg'
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import Recent from "../../components/Recent/Recent";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  const items = [
    {
      icon: "fa-solid fa-house-user",
      label: "Home"
    },
    {
      icon: "fa-solid fa-circle-info",
      label: "About"
    },
    {
      icon: "fa-solid fa-briefcase",
      label: "Services"
    },
    {
      icon: "fa-solid fa-address-book",
      label: "Contact"
    },
  ]
  return (
    <div>
      <NavBar items = {items} logo = "Trippy"  />
      <Hero 
      image={{src:bg , alt: "trippy Journey"}}
      title="Your Journey Your Story"
      description="Choose Your Favourite Destination."
      btn={{visible: true , label:"Travel Now"}}
      />
      <PopularDestinations />
      <Recent />
      <Footer />
    </div>
  )
}
