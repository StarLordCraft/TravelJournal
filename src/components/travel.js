import locationIcon from '../assets/location.svg'

import '../styles/travel.css'

export default function Travel(props){

    return(
        <section className="travel">
            <div className="travel-img">
                <img src={props.cover} alt=""/>
            </div>
            <div className="travel-content">
                <div className="travel-location">
                    <img src={locationIcon} alt="" />
                    <p className="location-title">{props.location}</p>
                    <p><span>View on Google Maps</span></p>
                </div>

                <h1>{props.travel}</h1>

                <div className="travel-description">
                    <p><b>{props.arrival} - {props.exit}</b></p>

                    <p>{props.description}</p>
                </div>

            </div>
        </section>
    )
}