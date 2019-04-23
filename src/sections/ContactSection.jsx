import React from 'react'

import styled from '@emotion/styled'

import { Element } from 'react-scroll'

import logo from '../assets/logo.svg'
import spaghetti from '../assets/506049-PHTXCC-112.jpg'

import { ContactUs } from '../components'

const Section = styled.section({
  width: '100%',
  height: '100vh',
  background: '#19413F',
  background: 'while',
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

const Paragraph = styled.p({
  color: 'white',
  fontSize: '1.5em',
  margin: 0,
  fontWeight: 300,
  marginBottom: 5,
  '@media (max-width: 667px)': {
    fontSize: '1.2em',
  },
})

const Logo = styled.div({
  height: 100,
  width: '100%',
  backgroundColor: 'black',
  maskImage: `url(${logo})`,
  maskSize: 'contain',
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
  marginBottom: 20,
  fill: 'black',
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
        {/* <Logo /> */}
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
