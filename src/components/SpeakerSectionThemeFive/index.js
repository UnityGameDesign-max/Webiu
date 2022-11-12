import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import { SpeakerCardThemeFive } from "./SpeakerCardThemeFive"

export const SpeakerSectionThemeFive = ({
  speakers,
  speakerHeading,
  linearGradient,
}) => {
  return (
    <div
      className="speaker-section-wrapper"
      style={{
        backgroundImage: `${linearGradient}, url(/images/gradient.png)`,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          {speakerHeading ? (
            <Col className="text-center">
              <h1 className="speaker-section-heading">{speakerHeading}</h1>
            </Col>
          ) : null}
        </Row>
        <Row xs={3} className="justify-content-center">
          {speakers
            ? speakers.map((speaker, index) => (
                <Col key={index}>
                  <SpeakerCardThemeFive
                    image={speaker.image}
                    occupation={speaker.occupation}
                    name={speaker.name}
                  />
                </Col>
              ))
            : null}
        </Row>
        <Row className="justify-content-center">
          <button className="speakerBtn">View All</button>
        </Row>
      </Container>
    </div>
  )
}

SpeakerSectionThemeFive.propTypes = {
  speakers: PropTypes.array,
  speakerHeading: PropTypes.string,
  linearGradient: PropTypes.string
}
