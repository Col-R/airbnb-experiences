import React from 'react'
import './Card.css'

// icons
import star from '../img/star.png'

// images
// import ks from '../img/katie-zaferes.png'
// import mountain_bike from '../img/mountain-bike.png'
// import wedding from '../img/wedding-photography.png'

const Card = (props) => {
  let badgeText = null;

  // if openSpots = 0, display SOLD OUT. Otherwise, if the location is Online, display ONLINE. Otherwise, display nothing
  props.openSpots === 0 ? (badgeText = 'SOLD OUT') : 
  props.location === 'Online' ? (badgeText = 'ONLINE') : 
  badgeText = null;

  return (
    <div className = "card__main">
    {/*if badgeText is not null, display either SOLD OUT or ONLINE based on the above logic */}
    {badgeText && <div className="card__badge">{badgeText}</div>}
      <img className = "card__img" src={`../images/${props.img}`} alt="experience"/>
      <div className='card__info'>
        <p className="top_card_info"><img src = {star} alt = "star" id='star__icon'/>
          {props.rating} ({props.reviewCount}) - {props.location}</p>
        <p className='mid_card_info'>{props.title}</p>
        <p className='lower_card_info'> <span id = "price">From ${props.price}</span> / person</p>
      </div>

    </div>
  )
}

export default Card