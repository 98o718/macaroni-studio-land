import React from 'react'
import { FirstSection, SecondSection } from './sections'
import { Menu } from './components'
import { Element } from 'react-scroll'

const App = () => {
  return (
    <>
      <Menu
        items={[
          {
            title: 'ГЛАВНАЯ',
            link: 'first',
          },
          {
            title: 'О НАС',
            link: 'second',
          },
        ]}
      />
      <Element name="first">
        <FirstSection />
      </Element>
      <Element name="second">
        <SecondSection />
      </Element>
    </>
  )
}

export default App
