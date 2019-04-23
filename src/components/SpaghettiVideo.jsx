import React from 'react'

import styled from '@emotion/styled'

import pasta from '../assets/pasta.mp4'

const Video = styled.video({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '0',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  overflow: 'hidden',
})

export const SpaghettiVideo = () => {
  return (
    <Video loop autoPlay muted playsInline>
      <source src={pasta} type="video/mp4" />
      Ваш браузер не поддерживает тег video{' '}
      <span role="img" aria-label="Грустный эмодзи">
        😔
      </span>
    </Video>
  )
}
