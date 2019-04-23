import React from 'react'

import styled from '@emotion/styled'

import { KnowMore } from './KnowMore'

const Container = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 30,
  zIndex: 1,
})

const Title = styled.h1({
  color: 'white',
  fontWeight: 900,
  fontSize: '2.5em',
})

const Slogan = styled.h1({
  color: 'white',
  width: '50%',
  fontWeight: 900,
  fontStyle: 'normal',
  fontSize: '3em',
  '@media (max-width: 667px)': {
    width: '100%',
    fontSize: '2em',
  },
})

export const Welcome = () => {
  return (
    <Container>
      <Title>
        MACARONI
        <br />
        STUDIO
      </Title>
      <Slogan>Мы занимаемся экспресс веб-разработкой</Slogan>
      <KnowMore />
    </Container>
  )
}
