import React from 'react'
import styled from 'styled-components'
import { fonts, colors } from './brandingStyles'
import logo  from './assets/vectors/logoAjuar.svg'
import smiley  from './assets/vectors/smileyAjuar.svg'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  .headerContainer{
    position: absolute;
    top: 25px;
    width: 100%;
    text-align: center;
    
    .headerLink{
      font-family: ${fonts.display};
      color: ${colors.light};
      font-size: 20px;
      letter-spacing: 2.2px;
      text-decoration: none;
    }
  }

  .logoCenterContainer{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 10px;

    .logoWrapper{

      .logo{
      }
    }
    .smileyWrapper{
      transform: translateY(-5px);
      margin-top: 32px;

      .smiley{

      }
    }
  }
`

const App = () => {
  return (
    <AppContainer>
      <div className="headerContainer">
        <a href="https://www.instagram.com/ajuarestudio/" target="_blank" rel="noreferrer" className="headerLink">@AJUARESTUDIO</a>
      </div>

      <div className="logoCenterContainer">
        <div className="logoWrapper">
          <img src={logo} alt="logo Ajuar" className="logo" />
        </div>
        <div className="smileyWrapper">
          <img src={smiley} alt="smiley Ajuar" className="smiley" />
        </div>
      </div>
      
    </AppContainer>
  )
}
export default App
