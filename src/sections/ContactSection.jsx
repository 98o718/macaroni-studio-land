import React from 'react'

import styled, { css } from 'styled-components'

import { Element } from 'react-scroll'

import spaghetti from '../assets/spaghetti.jpg'

import zet from '../assets/clients/zet.png'
import hookah from '../assets/clients/hookah.png'
import ohhmode from '../assets/clients/ohhmode.png'
import fvt from '../assets/clients/fvt.png'

import { ContactUs } from '../components'

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  /* background: url(${spaghetti}) 95% top; */
  background-color: #E8E1E9;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 50px;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 667px) {
    padding: 30px;
    padding-top: 60px;
  }
`

const Header = styled.h1`
  color: black;
  font-size: 2em;
  margin: 0;
  font-weight: 900;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;

  @media (max-width: 667px) {
    font-size: 2em;
  }
`

const Phrase = styled.h2`
  color: black;
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 30px;

  @media (max-width: 667px) {
    font-size: 1.5em;
  }
`

const Client = styled.span`
  background: url(${({ image }) => image});
  background-size: contain;
  width: 250px;
  height: 250px;
  margin: 5px;

  ${({ invert }) =>
    invert &&
    css`
      filter: invert(100);
    `}
`

const Clients = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContactSection = ({ name }) => {
  return (
    <Element name={name}>
      <Section>
        <Header>Нам доверяют</Header>
        <Clients>
          <Client image={zet} invert />
          <Client image={hookah} invert />
          <Client image={ohhmode} invert />
          <Client image={fvt} />
        </Clients>
        <Phrase>Связаться с нами:</Phrase>
        <ContactUs />
      </Section>
    </Element>
  )
}
