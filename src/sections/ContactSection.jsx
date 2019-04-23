import React from 'react'

import styled from '@emotion/styled'

import { Element } from 'react-scroll'

import spaghetti from '../assets/spaghetti.jpg'

import { ContactUs } from '../components'

const Section = styled.section({
  width: '100%',
  height: '100vh',
  background: `url(${spaghetti}) right top`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: 50,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 0,

  '@media (max-width: 667px)': {
    padding: 30,
  },
})

const Header = styled.h1({
  color: 'black',
  fontSize: '2em',
  margin: 0,
  fontWeight: 900,
  marginBottom: 15,
  width: '100%',
  textAlign: 'center',

  '@media (max-width: 667px)': {
    fontSize: '2em',
  },
})

const Phrase = styled.h2({
  color: 'black',
  fontSize: '1.5em',
  margin: 0,
  marginBottom: 30,
  '@media (max-width: 667px)': {
    fontSize: '1.5em',
  },
})

const Title = styled.h1({
  color: 'black',
  fontWeight: 900,
  fontSize: '2.5em',
})

export const ContactSection = ({ name }) => {
  return (
    <Element name={name}>
      <Section>
        <Header>ДОВЕРЬСЯ нам!</Header>
        <Title>
          MACARONI
          <br />
          STUDIO
        </Title>
        <Phrase>Вместе мы сделаем круто!</Phrase>
        <ContactUs />
      </Section>
    </Element>
  )
}
