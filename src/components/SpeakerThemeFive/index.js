import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import { SpeakerCardThemeFive } from "./SpeakerCardThemeFive"

export const SpeakerThemeFive = ({
  speakers,
  speakerHeading,
  linearGradient,
  backgroundImage
}) => {
  return (
    <div
      className="speaker-section-wrapper"
      style={{
        backgroundImage: `${linearGradient}, url(${backgroundImage})`,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Row>
            {speakerHeading ? (
              <Col className="text-center">
                <h1 className="speaker-section-heading">{speakerHeading}</h1>
              </Col>
            ) : null}
          </Row>
          <Row xs={3}>
            {speakers
              ? speakers.map((speaker, index) => (
                  <Col className="justify-content-center" key={index}>
                    <SpeakerCardThemeFive
                      image={speaker.image}
                      occupation={speaker.occupation}
                      name={speaker.name}
                    />
                  </Col>
                ))
              : null}
          </Row>
          <Row>
            <button className="speakerBtn">View All</button>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

SpeakerThemeFive.propTypes = {
  speakers: PropTypes.array,
  speakerHeading: PropTypes.string,
  linearGradient: PropTypes.string,
  backgroundImage: PropTypes.string
}
