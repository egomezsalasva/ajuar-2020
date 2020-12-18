// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  import Marquee from 'react-double-marquee'
  //-Assets
  import logo  from './assets/vectors/logoAjuar.svg'
  import smiley  from './assets/vectors/smileyAjuar.svg'
  //-Data
  import { fonts, colors, mediaQueries } from './brandingStyles'
  //-Custom hooks
  // import {useMediaQuery} from './customHooks/mediaQueryHook'
// 


//STYLES
  const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    
    .headerContainer{
      position: absolute;
      top: 25px;
      width: 100%;
      text-align: center;
      @media (max-width: ${mediaQueries.mobile}){
        top: 50%;
        transform: translateY(-50%);
      }
      
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
      @media (max-width: ${mediaQueries.mobile}){
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 0px;
      }

      .logoWrapper{

        .logo{
          @media (max-width: ${mediaQueries.mobile}){
            width: 91.2vw;
          }
        }
      }

      .smileyWrapper{
        transform: translateY(-5px);
        margin-top: 32px;
        @media (max-width: ${mediaQueries.mobile}){
          margin-top: 25px;
        }

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
// 


//MAIN COMPONENT
  const App = () => {

    //Inline Style For Marquee Module & Media Query using custom hook
      // const marqueeMobile = useMediaQuery(`(max-width: ${mediaQueries.mobile})`)
      // const marqueeStyles = {
      //   width: '100%', 
      //   whiteSpace: 'nowrap', 
      //   fontFamily: fonts.text,
      //   fontSize: marqueeMobile ? "30px" : "20px",
      //   color: colors.light,
      //   letterSpacing: marqueeMobile ? "1.6px" :"0.37px",
      //   textTransform: "uppercase",
      // }
    // 

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
          <div style={{
            width: '100%', 
            whiteSpace: 'nowrap', 
            fontFamily: fonts.text,
            fontSize: "20px",
            color: colors.light,
            letterSpacing: "0.37px",
            textTransform: "uppercase",
          }}>
            <Marquee speed={0.04} delay={3000} direction="left" childMargin={8}>¡Hola! Somos Ajuar, el menaje digital que necesita tu proyecto para el si quiero de tu cliente. Muy pronto abre las puertas de su casa. Gracias por venir. @ajuarestudio. </Marquee>
          </div>
        </div>
        
      </AppContainer>
    )
  }
  export default App
// 
