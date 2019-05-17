import React, { useState, useEffect } from 'react'

import styled, { css, keyframes } from 'styled-components'

import { Link } from 'react-scroll'

const reveal = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const MenuScreen = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(00, 00, 00, 0.8);
  animation: ${reveal} 0.2s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const MenuItem = styled.button`
  border: none;
  background: transparent;
  color: white;
  font-weight: 900;
  font-size: 2em;
  cursor: pointer;
  outline: none;
  user-select: none;
  margin-bottom: 15px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: ${({ menuType }) =>
      menuType === 'keyboard' ? '5px solid white' : 'none'};
  }
`

const MenuLine = styled.div`
  height: 10px;
  margin-bottom: 5px;
  width: 100%;
  background-color: #fff;
`

const MenuButton = styled.button`
  position: fixed;
  height: 40px;
  width: 45px;
  background-color: transparent;
  color: white;
  font-size: 50px;
  cursor: pointer;
  border: none;
  z-index: 101;
  transition: transform 0.2s ease;
  position: fixed;
  right: 30px;
  top: 30px;
  outline: none;
  margin: 0;
  padding: 5px;
  box-sizing: content-box;

  &:focus {
    outline: ${({ menuType }) =>
      menuType === 'keyboard' ? '5px solid white' : 'none'};
  }

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(90deg);
    `}
`

export const Menu = ({ items }) => {
  const [open, handleMenu] = useState(false)
  const [menuType, handleMenuType] = useState('keyboard')

  const handleKeyboard = () => {
    handleMenuType('keyboard')
  }

  const handleMouse = () => {
    handleMenuType('mouse')
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
    <>
      <MenuButton
        menuType={menuType}
        tabindex="1"
        opened={open}
        onClick={() => handleMenu(!open)}
      >
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </MenuButton>

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
                <MenuItem menuType={menuType}>{item.title}</MenuItem>
              </Link>
            ))}
        </MenuScreen>
      )}
    </>
  )
}
