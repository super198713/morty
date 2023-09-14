const LocationInfo = ({location}) => {
    return (
      <article className="location">
        
        <div className="location__info"> 
          <h2 className="location__name">{location?.name}</h2>   
            <ul className="location__information">
                <li><span>Type:</span><br /><span>{location?.type}</span></li>
                <li><span>Dimension:</span><br /><span>{location?.dimension === '' || 'unknown' }</span></li>
                <li><span>Population:</span><br /><span>{location?.residents.length}</span></li>
            </ul>
        </div> 
      </article>
    )
  }
  
  export default LocationInfo