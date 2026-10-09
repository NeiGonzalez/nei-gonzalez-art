import Carousel from '../components/Carousel'
import { heroImages } from '../data/siteContent'
export default function Home() { return <section className="home"><Carousel images={heroImages} /></section> }
