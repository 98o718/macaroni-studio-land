import React, { useState } from 'react'

import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const reveal = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ContactScreen = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  width: '100%',
  height: '100%',
  background: 'rgba(00, 00, 00, 0.8)',
  animation: `${reveal} .2s linear`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const StylishButton = styled.button({
  margin: 30,
  padding: '30px',
  border: '3px solid black',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: 'black',
  fontWeight: '700',
  position: 'relative',
  outline: 'none',

  ':after': {
    transition: 'all .2s ease',
    content: '""',
    position: 'absolute',
    top: 7,
    left: 7,
    width: '240px',
    height: '82px',
    zIndex: -1,
    backgroundColor: '#E5CA97',
  },

  ':hover': {
    ':after': {
      top: 0,
      left: 0,
    },
  },

  ':active': {
    ':after': {
      top: 0,
      left: 0,
      backgroundColor: 'white',
    },
  },
})

export const ContactUs = () => {
  const [open, handleContact] = useState(false)

  return (
    <>
      <StylishButton onClick={() => handleContact(!open)}>
        СВЯЗАТЬСЯ С НАМИ
      </StylishButton>
      {open && <ContactScreen onClick={() => handleContact(!open)} />}
    </>
  )
}
