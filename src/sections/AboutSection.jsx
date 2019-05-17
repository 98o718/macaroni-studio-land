import React from 'react'

import styled from 'styled-components'

import { Element } from 'react-scroll'

import secondSectionBackground from '../assets/secondSectionBackground.png'

import { About } from '../components'

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${secondSectionBackground});
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 50px;
  align-items: center;
  justify-content: center;

  @media (max-width: 667px) {
    padding: 50px 30px;
    background-size: contain;
  }
`

export const AboutSection = ({ name }) => {
  return (
    <Element name={name}>
      <Section>
        <About />
      </Section>
    </Element>
  )
}
