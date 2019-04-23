import React from 'react'

import styled from '@emotion/styled'

import { Element } from 'react-scroll'

import secondSectionBackground from '../assets/secondSectionBackground.png'

import { About } from '../components'

const Section = styled.section({
  width: '100%',
  minHeight: '100vh',
  background: `url(${secondSectionBackground})`,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: 50,
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 667px)': {
    padding: '50px 30px',
    backgroundSize: 'contain',
  },
})

export const AboutSection = ({ name }) => {
  return (
    <Element name={name}>
      <Section>
        <About />
      </Section>
    </Element>
  )
}
