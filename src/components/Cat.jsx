import React from 'react'

import styled from '@emotion/styled'

import cat from '../assets/cat.svg'
import spaghetti from '../assets/spaghetti.svg'

const OuterDiv = styled.div({
  width: '50vw',
  height: '50vw',
  background: '#19413F',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  marginBottom: '-8vw',
  right: 50,
  overflowY: 'hidden',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
})

const InnerDiv = styled.div({
  width: '75%',
  height: '75%',
  background: '#21514D',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
})

const CatImage = styled.div({
  height: '75%',
  width: '75%',
  background: `url(${cat})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
})

export const Cat = () => {
  return (
    <OuterDiv>
      <InnerDiv>
        <CatImage />
      </InnerDiv>
    </OuterDiv>
  )
}
