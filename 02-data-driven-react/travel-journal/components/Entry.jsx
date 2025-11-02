/**
 * Challenge: Fix our component! 😱
 */

// export default function Entry(props) {
//     console.log(props)
//     return ( 
//     <article className="journal-entry">
//         <div className="main-image-container">
//     <img src={props.entry.img.src} alt={`Photo of ${props.entry.img.alt}`} className="main-image"/>
//         </div>
//         <div className="info-container">
//        <img src="../images/marker.png" alt="map marker icon" className="marker"/>
//        <span className="country">{props.entry.country}</span>
//        <a href={props.entry.googleMapsLink}>View on Google Maps!</a>
//        <h2 className="entry-title">{props.entry.title}</h2>
//        <p className="trip-dates">{props.entry.dates}</p>
//        <p className="entry-text">{props.entry.text}</p>
//         </div>
        
//     </article> )
// }

export default function Entry(props) {
    console.log(props)
    return ( 
    <article className="journal-entry">
        <div className="main-image-container">
    <img src={props.img.src} alt={`Photo of ${props.img.alt}`} className="main-image"/>
        </div>
        <div className="info-container">
       <img src="../images/marker.png" alt="map marker icon" className="marker"/>
       <span className="country">{props.country}</span>
       <a href={props.googleMapsLink}>View on Google Maps!</a>
       <h2 className="entry-title">{props.title}</h2>
       <p className="trip-dates">{props.dates}</p>
       <p className="entry-text">{props.text}</p>
        </div>
        
    </article> )
}