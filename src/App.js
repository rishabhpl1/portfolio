import React from 'react'
import IntroductionPage from './components/IntroductionPage'
import NavigationBar from './components/NavigationBar'
import Projects from './components/Projects'

const App = () => {
    return(
        <>
        <IntroductionPage />
        <NavigationBar />
        <Projects />
        </>
    )
}

export default App