import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 70%;

  @media (max-width: 667px) {
    width: 100%;
    font-size: 0.8em;
  }
`

const Header = styled.h1`
  color: white;
  font-size: 2em;
  margin: 25px 15px 0 0;
  font-weight: 900;
  width: 100%;
`

const Phrase = styled.h2`
  color: white;
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 5px;
`

const Paragraph = styled.p`
  color: white;
  font-size: 1.5em;
  margin: 0;
  font-weight: 300;
  margin-bottom: 5;

  @media (max-width: 667px) {
    font-size: 1.2em;
  }
`

export const About = () => {
  return (
    <Wrapper>
      <Header>
        КТО МЫ?{' '}
        <span role="img" aria-label="Эмодзи ботаника">
          🤓
        </span>
      </Header>
      <Phrase>
        Мы - студия экспресс веб-разработки, и наша цель - помочь людям делать
        их продукты лучше!
      </Phrase>
      <Paragraph>
        С новейшими технологиями и лучшими практиками сделаем Ваш продукт лучше
        быстро и <b style={{ fontWeight: 500 }}>недорого</b>!
      </Paragraph>
      {/* <Header>
        ЧТО ЗНАЧИТ ЭКСПРЕСС?{' '}
        <span role="img" aria-label="Хмм">
          ⚡️
        </span>
      </Header>
      <Phrase>Это значит, что мы разработаем вам сайт БЫСТРО!</Phrase> */}
      <Header>
        КАКИМ ОБРАЗОМ?{' '}
        <span role="img" aria-label="Хмм эмодзи">
          🤔
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
