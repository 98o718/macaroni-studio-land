import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

const StylishButton = styled.button`
  margin: 0;
  padding: 30px;
  border: 3px solid black;
  cursor: pointer;
  background-color: transparent;
  color: black;
  font-weight: 700;
  position: relative;
  outline: none;
  text-transform: uppercase;
  width: 300px;
  height: 80px;

  &:focus {
    border: ${({ buttonType }) =>
      buttonType === 'keyboard' ? '3px solid white' : '3px solid black'};
  }

  &:after {
    transition: all 0.2s ease;
    content: '';
    position: absolute;
    top: 7px;
    left: 7px;
    width: 297px;
    height: 77px;
    background-color: #e5ca97;
    z-index: -1;
  }

  &:hover {
    &:after {
      top: 0;
      left: 0;
    }
  }

  &:active {
    border: 3px solid black;
    &:after {
      top: 0;
      left: 0;
      background-color: white;
    }
  }

  @media (max-width: 375px) {
    padding: 5px;
    font-size: 0.7em;
    width: 80%;
    height: 72px;

    &:after {
      width: 102%;
      height: 70px;
    }
  }
`

export function ContactUs() {
  const [buttonType, handleButtonType] = useState('keyboard')

  const handleKeyboard = () => {
    handleButtonType('keyboard')
  }

  const handleMouse = () => {
    handleButtonType('mouse')
  }

  useEffect(() => {
    document.body.addEventListener('mousedown', handleMouse)
    document.body.addEventListener('keydown', handleKeyboard)

    return () => {
      document.body.removeEventListener('mousedown', handleMouse)
      document.body.removeEventListener('keydown', handleKeyboard)
    }
  }, [])

  return (
    <StylishButton
      aria-label="Связаться с нами"
      buttonType={buttonType}
      onClick={() => (window.location.href = 'mailto:hello@macaroni.studio')}
    >
      hello@macaroni.studio
    </StylishButton>
  )
}
