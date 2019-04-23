import React from 'react'

import { WelcomeSection, AboutSection, ContactSection } from './sections'

import { Menu } from './components'

const App = () => {
  return (
    <>
      <Menu
        items={[
          {
            title: 'ГЛАВНАЯ',
            link: 'welcome',
          },
          {
            title: 'О НАС',
            link: 'about',
          },
          {
            title: 'СВЯЗАТЬСЯ С НАМИ',
            link: 'contact',
          },
        ]}
      />
      <WelcomeSection name="welcome" />
      <AboutSection name="about" />
      <ContactSection name="contact" />
    </>
  )
}

export default App
