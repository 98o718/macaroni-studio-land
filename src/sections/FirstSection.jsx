import React from 'react'

import styled from '@emotion/styled'

import { Welcome, Cat } from '../components'

import pasta from '../assets/pasta.mp4'

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

const Video = styled.video({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '0',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  overflow: 'hidden',
})

export const FirstSection = () => {
  return (
    <Section>
      <Welcome />
      <Video loop autoPlay muted>
        <source src={pasta} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      {/* <Cat /> */}
    </Section>
  )
}
