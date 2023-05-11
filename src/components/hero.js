import Travel from './travel'
import travelPost from '../data/travelpost'

import '../styles/hero.css'

export default function Hero(){
    const travels = travelPost.map((data) => 
    <Travel 
    {...data}
    />)
    return(
        <main className="hero">
            {travels}
        </main>
    )
}