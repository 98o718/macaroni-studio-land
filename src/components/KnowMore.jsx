import React, { useState, useEffect } from 'react'

import styled, { css } from 'styled-components'

import { Link } from 'react-scroll'

const Container = styled.div`
  height: 25%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Paragraph = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 500;
  padding-left: 0;
  user-select: none;
  outline: none;
  font-size: 1.5em;
  position: relative;
  cursor: pointer;
  text-align: left;

  &:focus {
    ${({ buttonType }) =>
      buttonType === 'keyboard'
        ? css`
            &:hover {
              &:after {
                height: 1px;
                width: 80px;
              }
            }
            &:after {
              height: 5px;
              width: 160px;
            }
          `
        : 'none'};
  }

  &:after {
    content: '';
    background: white;
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 1px;
    width: 30px;
    transition: all 0.2s ease;
  }

  &:hover {
    &:after {
      width: 80px;
    }
  }
`

export const KnowMore = () => {
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
    <Container>
      <Link to="about" spy={true} smooth={true} duration={350}>
        <Paragraph buttonType={buttonType} aria-label="Узнать больше">
          Узнать больше
        </Paragraph>
      </Link>
    </Container>
  )
}
