import React from 'react'

import styled from 'styled-components'

import { Element } from 'react-scroll'

import { Welcome, SpaghettiVideo } from '../components'

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e9ad90, #cc8863);
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 667px) {
    padding: 15px;
    padding-top: 50px;
  }
`

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
