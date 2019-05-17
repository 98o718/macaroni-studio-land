import React from 'react'

import styled from 'styled-components'

import { KnowMore } from './KnowMore'

import logo from '../assets/logo.png'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  z-index: 1;
  flex-grow: 1;
`

// const Title = styled.h1({
//   color: 'white',
//   fontWeight: 900,
//   fontSize: '2.5em',
// })

const Logo = styled.span`
  height: 100px;
  width: 455px;
  max-width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${logo});
`

const Slogan = styled.h1`
  color: white;
  width: 50%;
  font-weight: 900;
  font-style: normal;
  font-size: 3em;

  @media (max-width: 667px) {
    width: 100%;
    font-size: 2em;
  }
`

export const Welcome = () => {
  return (
    <Container>
      {/* <Title>
        MACARONI
        <br />
        STUDIO
      </Title> */}
      <Logo />
      <Slogan>Мы занимаемся экспресс веб-разработкой</Slogan>
      <KnowMore />
    </Container>
  )
}
