import React from 'react'

import styled from '@emotion/styled'

const Section = styled.section({
  width: '100%',
  //   height: '100vh',
  background: 'linear-gradient(to bottom, #E9AD90, #CC8863)',
  background: '#D26A69',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: 50,
  alignItems: 'center',
  justifyContent: 'center',

  ':before': {
    content: '""',
    borderBottom: '10px dashed white',
    // background: 'white',
    position: 'absolute',
    top: -15,
    left: 0,
    height: '10px',
    width: '100%',
    zIndex: 1,
  },

  ':after': {
    content: '""',
    borderBottom: '10px dashed white',
    // background: 'white',
    position: 'absolute',
    bottom: -5,
    left: 0,
    height: '10px',
    width: '100%',
    zIndex: 1,
  },

  '@media (max-width: 667px)': {
    padding: 30,
  },
})

const Pad = styled.div({
  position: 'absolute',
  transform: 'rotate(-2deg)',
  background: 'white',
  height: 100,
  width: '120%',
  top: -70,
  zIndex: 2,
})

const Header = styled.h1({
  color: 'white',
  fontSize: '2em',
  margin: 0,
  fontWeight: 900,
  marginBottom: 15,
  width: '100%',

  '@media (max-width: 667px)': {
    fontSize: '2em',
  },
})

const Phrase = styled.h2({
  color: 'white',
  fontSize: '1.5em',
  margin: 0,
  marginBottom: 5,
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

export const ThirdSection = () => {
  return (
    <Section>
      <div style={{ width: '70%' }}>
        <Header>
          ЧТО ЗНАЧИТ ЭКСПРЕСС?{' '}
          <span role="img" aria-label="Хмм">
            🤔
          </span>
        </Header>
        <Paragraph>
          Это значит, что мы разработаем вам сайт{' '}
          <b style={{ fontWeight: 500 }}>быстро!</b>
        </Paragraph>
        <Phrase>Каким образом?</Phrase>
        <Paragraph>
          Основаная идея нашей студии в том, что общение с заказщиком сведено к
          минимуму!
        </Paragraph>
        <Paragraph>
          После составления ТЗ мы сразу приступаем к работе и выдаем результат в
          максимально короткие сроки
        </Paragraph>
        <Paragraph>
          Никаких правок!{' '}
          <b style={{ fontWeight: 500 }}>Результат – готовый продукт!</b>
        </Paragraph>
      </div>
    </Section>
  )
}
