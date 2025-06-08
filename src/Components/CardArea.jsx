import './Style/cardarea.css';
import travel from './Data/Travel';

export default function CardArea() {
  return (
    <div className='card-area'>
      {travel.map((travel) => (
        <div key={travel.id} >
        <div key={travel.id} className="card">
        <div className='card-img'>
        <img src={travel.img.src} alt={travel.img.alt} />
        </div>
        <div className='textarea'>
          <p><i className="bi bi-geo-alt-fill" style={{color:'#f55a5a'}} ></i><span className='location'>{travel.country}</span><a href={travel.googleMapsLink} className='map'>View on Google Maps</a></p>
          <h1 className='title'>{travel.title}</h1>
          <p className='date'>{travel.dates}</p>
          <p className='info'>{travel.text}</p>
        </div>
      </div>
      <hr />
      </div>
      ))}
    </div>
  )
}