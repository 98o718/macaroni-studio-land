import React from 'react'

import styled from '@emotion/styled'

const Wrapper = styled.div({
  width: '70%',

  '@media (max-width: 667px)': {
    width: '100%',
    fontSize: '0.8em',
  },
})

const Header = styled.h1({
  color: 'white',
  fontSize: '2em',
  margin: '15px 0',
  marginTop: 25,
  fontWeight: 900,
  width: '100%',
})

const Phrase = styled.h2({
  color: 'white',
  fontSize: '1.5em',
  margin: 0,
  marginBottom: 5,
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

export const About = () => {
  return (
    <Wrapper>
      {' '}
      <Header>
        КТО МЫ?{' '}
        <span role="img" aria-label="Спагетти">
          🍝
        </span>
      </Header>
      <Phrase>Мы - студия экспресс веб-разработки</Phrase>
      <Header>
        ПОЧЕМУ МЫ?{' '}
        <span role="img" aria-label="Хмм">
          🤔
        </span>
      </Header>
      <Phrase>Наша цель помочь людям делать их продукты лучше!</Phrase>
      <Paragraph>
        С новейшими технологиями и лучшими практиками сделаем ваш продукт лучше
        быстро и <b style={{ fontWeight: 500 }}>недорого</b>!
      </Paragraph>
      <Header>
        ЧТО ЗНАЧИТ ЭКСПРЕСС?{' '}
        <span role="img" aria-label="Хмм">
          ⚡️
        </span>
      </Header>
      <Phrase>Это значит, что мы разработаем вам сайт БЫСТРО!</Phrase>
      <Header>
        КАКИМ ОБРАЗОМ?{' '}
        <span role="img" aria-label="Хмм">
          🙅‍♂️
        </span>
      </Header>
      <Phrase>
        Основная идея нашей студии в том, что общение с заказщиком сведено к
        минимуму!
      </Phrase>
      <Paragraph>
        После составления ТЗ мы сразу приступаем к работе и выдаем результат в
        максимально короткие сроки
      </Paragraph>
      <Paragraph>
        Никаких правок!{' '}
        <b style={{ fontWeight: 500 }}>Результат – готовый продукт!</b>
      </Paragraph>
    </Wrapper>
  )
}
