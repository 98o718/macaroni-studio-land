import React, { useState } from 'react'

import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import { Link } from 'react-scroll'

import MenuIcon from '../assets/menu.svg'

const BurgerButton = styled.button(
  {
    border: 'none',
    background: `url(${MenuIcon})`,
    height: 50,
    width: 50,
    cursor: 'pointer',
    backgroundSize: 'contain',
    position: 'fixed',
    right: 30,
    top: 30,
    zIndex: 9999,
    outline: 'none',
    filter: 'invert(100)',
    transition: 'all .2s ease',

    '@media (max-width: 667px)': {
      height: 30,
      width: 30,
    },
  },
  props => ({
    transform: props.opened && 'rotate(90deg)',
  })
)

const reveal = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const MenuScreen = styled.div({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: 'rgba(00, 00, 00, 0.8)',
  zIndex: 9998,
  animation: `${reveal} .2s linear`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const MenuItem = styled.button({
  border: 'none',
  background: 'transparent',
  color: 'white',
  fontWeight: 900,
  fontSize: '2em',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',
  marginBottom: 15,
  transition: 'all .2s ease',
  ':hover': {
    transform: 'scale(1.1)',
  },
})

export const Menu = ({ items }) => {
  const [open, handleMenu] = useState(false)

  console.log(items)

  return (
    <>
      <BurgerButton opened={open} onClick={() => handleMenu(!open)} />
      {open && (
        <MenuScreen onClick={() => handleMenu(!open)}>
          {items &&
            items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                spy={true}
                smooth={true}
                duration={350}
                onClick={() => handleMenu(!open)}
              >
                <MenuItem>{item.title}</MenuItem>
              </Link>
            ))}
        </MenuScreen>
      )}
    </>
  )
}
