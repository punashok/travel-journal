export default function Card(props) {
    
    return (
        <div className="card">
            <div className="card--image">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card--info">
                <div className="card--location-info">
                    <i className="fa-solid fa-location-dot"></i> <span className="card--country">{ props.location }</span>  <a href={props.googleMapsUrl} target="_blank" rel="noreferrer" className="card--google-link">View on Google Map</a>
                </div>
                <h2 className="card--title">
                    {props.title}
                </h2>
                <div className="card--date">
                    {props.startDate} - {props.endDate}
                </div>
                <div className="card--description">
                    {props.description}
                </div>
            </div>
        </div>
    )
}