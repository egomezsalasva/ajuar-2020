import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-double-marquee'
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

  .marqueeContainer{
    position: absolute;
    bottom: 15px;
    width: 100%;
  }
`

const marqueeStyles = {
  width: '100%', 
  whiteSpace: 'nowrap', 
  fontFamily: fonts.text,
  fontSize: "20px",
  color: colors.light,
  letterSpacing: "0.37px",
  textTransform: "uppercase",
}

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

      <div className="marqueeContainer">
        <div style={marqueeStyles}>
          <Marquee speed={0.04} delay={1000} direction="left" childMargin={8}>¡Hola! Somos Ajuar, el menaje digital que necesita tu proyecto para el si quiero de tu cliente. Muy pronto abre las puertas de su casa. Gracias por venir. @ajuarestudio. </Marquee>
        </div>
      </div>
      
    </AppContainer>
  )
}
export default App
