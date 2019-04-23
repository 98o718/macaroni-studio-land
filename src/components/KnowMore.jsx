import React from 'react'

import styled from '@emotion/styled'

import { Link } from 'react-scroll'

const Container = styled.div({
  height: '25%',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10000,
  justifyContent: 'flex-end',
})

const Paragraph = styled.h2({
  color: 'white',
  fontWeight: 500,
  position: 'relative',
  cursor: 'pointer',
  ':after': {
    content: '""',
    background: 'white',
    position: 'absolute',
    bottom: -8,
    left: 0,
    height: '1px',
    width: 30,
    transition: 'all .2s ease',
  },
  ':hover': {
    ':after': {
      width: 80,
    },
  },
})

export const KnowMore = () => {
  return (
    <Container>
      <Link to="about" spy={true} smooth={true} duration={350}>
        <Paragraph>Узнать больше</Paragraph>
      </Link>
    </Container>
  )
}
