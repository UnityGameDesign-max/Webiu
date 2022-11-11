import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const SpeakerCard = ({ image, occupation, name }) => {

  const backgroundImageOfSpeaker = { 
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat"
  }

  return (
    <div style={backgroundImageOfSpeaker} className="speaker-card-wrapper">
      <h3 className="speaker-name">{name}</h3>
      <p className="speaker-occupation">{occupation}</p>
    </div>
  )
}

SpeakerCard.propTypes = {
  image: PropTypes.string,
  occupation: PropTypes.string,
  name: PropTypes.string,
}
