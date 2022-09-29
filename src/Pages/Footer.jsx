import React from 'react'
import log_teletiquete from "../Resources/Logs/log_teletiquete.jpg";
import log_aj from "../Resources/Logs/Log_Aj.png"
import "../Styles/PagesS/LandingPage.scss"
import { RiCopyrightLine } from 'react-icons/ri';

export const Footer = () => {
  return (
    <section className='footer_contaienr'>
          <footer className='footer'>
            <div className='footer_information'>
              <h3>Informacion</h3>
              <ul>
                <li>
                  <h4>Opcion</h4>
                </li>
                <li>
                  <h4>Contacto</h4>
                </li>
                <li>
                  <h4>Papeleo</h4>
                </li>
              </ul>
              <div className='message'>
                  <p>
                    Gracias por <span className='title_part1'>prefe</span><span className='title_part2'>rirnos</span>
                  </p>
              </div>
            </div>
            <div className='footer_logs'>
              <img src={log_teletiquete} alt="teletiqute" />
              <i><RiCopyrightLine/></i>
              <img className='log_aj' src={log_aj} alt="Albert Quintanilla" />
            </div>
          </footer>  
      </section>
  )
}
