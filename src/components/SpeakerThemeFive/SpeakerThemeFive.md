## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Pricing Component

This is a reusable component for the speakers of a website. This Component is highly reusable and customizable via props, it consists of the cards of the speakers for the website.

## How to use the component

Import the component to `pages/index.js`
`import {SpeakerSectionThemeFive} from "../components/SpeakerSectionThemeFive";`

## How to handle props to the component

```
<SpeakerSectionThemeFive speakers={[{image: "sample-image", occupation: "sample-occupation",
name: "sample-name"}] speakerHeading="sample-speaker-component-heading" linearGradient="sample-linear-Gradient"}  />
```

`speakers` prop is the list of all the speakers 
`speakerHeading` prop is the heading of the speaker section
`linearGradient` prop is the linearGradient for the background of the speaker component section 