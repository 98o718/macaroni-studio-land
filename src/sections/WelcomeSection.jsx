import React from 'react'

import styled from '@emotion/styled'

import { Element } from 'react-scroll'

import { Welcome, SpaghettiVideo } from '../components'

const Section = styled.section({
  width: '100%',
  height: '100vh',
  background: 'linear-gradient(to bottom, #E9AD90, #CC8863)',
  display: 'flex',
  flexDirection: 'column',
  padding: 50,

  '@media (max-width: 667px)': {
    padding: 15,
    paddingTop: 50,
  },
})

export const WelcomeSection = ({ name }) => {
  return (
    <Element name={name}>
      <Section>
        <Welcome />
        <SpaghettiVideo />
      </Section>
    </Element>
  )
}
