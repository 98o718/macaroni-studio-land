import React from 'react'

import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

// import tz from '../assets/tz.svg'
// import check from '../assets/check.svg'
// import done from '../assets/done.svg'

import tz from '../assets/note.svg'
import check from '../assets/form.svg'
import done from '../assets/agreement.svg'

const Section = styled.section({
  width: '100%',
  height: '100vh',
  background: '#19413F',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: 50,
  alignItems: 'center',
  justifyContent: 'center',

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

const Header = styled.h1({
  color: 'white',
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

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const RotatingSpan = styled.span({
  display: 'inline-block',
  animation: `${rotate} 1.5s infinite linear`,
})

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: 15,
  marginTop: 50,
})

const GridItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  position: 'relative',
  textAlign: 'center',
})

const BackgroundDiv = styled.div({
  height: '10vw',
  width: '100%',
  marginBottom: 20,
})

const TZ = styled(BackgroundDiv)({
  background: `url(${tz}) no-repeat center`,
  backgroundSize: 'contain',

  ':after': {
    content: '">"',
    position: 'absolute',
    color: 'white',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '5em',
    right: -23,
    zIndex: 1,
  },
})

const Check = styled(BackgroundDiv)({
  background: `url(${check}) no-repeat center`,
  backgroundSize: 'contain',

  ':after': {
    content: '">"',
    position: 'absolute',
    color: 'white',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '5em',
    right: -23,
    zIndex: 1,
  },
})

const Done = styled(BackgroundDiv)({
  background: `url(${done}) no-repeat center`,
  backgroundSize: 'contain',
})

export const FourthSection = () => {
  return (
    <Section>
      <div style={{ width: '70%' }}>
        <Header>
          КАК ЭТО РАБОТАЕТ?{' '}
          {/* <RotatingSpan role="img" aria-label="Хмм">
            🛠
          </RotatingSpan> */}
        </Header>
        <Grid>
          <GridItem>
            <TZ />
            <Phrase>Составляем максимально точное ТЗ</Phrase>
          </GridItem>
          <GridItem>
            <Check />
            <Phrase>Разрабатываем</Phrase>
          </GridItem>
          <GridItem>
            <Done />
            <Phrase>Предоставляем результат!</Phrase>
          </GridItem>
        </Grid>
      </div>
    </Section>
  )
}
