import React from 'react'
import styled from 'styled-components'
import { fonts, colors } from './brandingStyles'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  .headerContainer{
    background: orange;
    position: absolute;
    top: 25px;
    width: 100%;
    text-align: center;
    color: #fff;
  }
`

const App = () => {
  return (
    <AppContainer>
      <div className="headerContainer">
        <a href="https://www.instagram.com/ajuarestudio/" target="_blank" rel="noreferrer" className="headerLink">@AJUARESTUDIO</a>
      </div>
      
    </AppContainer>
  )
}
export default App
