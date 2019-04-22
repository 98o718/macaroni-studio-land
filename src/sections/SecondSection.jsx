import React from 'react'

import styled from '@emotion/styled'

import secondSectionBackground from '../assets/secondSectionBackground.png'

const Section = styled.section({
  width: '100%',
  height: '100vh',
  background: `url(${secondSectionBackground})`,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: 50,
  //   justifyContent: 'space-around',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 667px)': {
    padding: 30,
  },
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

export const SecondSection = () => {
  return (
    <Section>
      <div>
        <Header>
          КТО МЫ?{' '}
          <span role="img" aria-label="Спагетти">
            🍝
          </span>
        </Header>
        <Phrase>Мы - это лучшее, что тебе встречалось!</Phrase>
        <Phrase>Почему?</Phrase>
        <Phrase>Мы поможем сэкономить время и деньги!</Phrase>
        <Paragraph>
          Поможем тебе с твоим бизнесом быстро, качественно и{' '}
          <b style={{ fontWeight: 500 }}>недорого</b>!
        </Paragraph>
        <Paragraph>
          Новейшие технологии, лучшие практики и многое другое...
        </Paragraph>
      </div>
    </Section>
  )
}
