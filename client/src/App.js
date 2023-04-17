import React from 'react'
import Home from './components/Home'
import { GamesContextProvider } from './context/GamesContext';

function App() {
    return (
        <GamesContextProvider>
    <>
   <Home />
    </>
    </GamesContextProvider>
    )
}

export default App; 