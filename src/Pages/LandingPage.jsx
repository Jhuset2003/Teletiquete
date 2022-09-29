import React from 'react'
import { SearchForm } from '../Components/Forms/SearchForm'
import { Nav } from '../Components/Nav/Nav'
import MarginLayout from '../Layouts/MarginLayout'
import "../Styles/PagesS/LandingPage.scss"
import payment from "../Resources/Imgs/payment.png"
import log_teletiquete from "../Resources/Logs/log_teletiquete.jpg";
import log_aj from "../Resources/Logs/Log_Aj.png"


import { RiCopyrightLine } from 'react-icons/ri';


export const LandingPage = () => {
  return (
    <div className='Landing'>
      <section className='home' id='Home'>
      <section className='nav_container'>
        <Nav/>
      </section>
          <MarginLayout>
              <div className='home_elements_container'>
                  <div className='title_container'>
                      <h1>¿A Donde Deseas <span className='title_part1'>Via</span><span className='title_part2'>jar</span>?</h1>
                  </div>
                  <div className='form_container'>
                    <SearchForm/>
                  </div>
              </div>
          </MarginLayout>
          <footer className='figure_container' />
      </section>
      <section className='information_section' id='Information'>
        <div className='information_section_container'>
            <MarginLayout>
              <div className="payment_methods">
                <h1>Medios de <span className='title_part1'>pa</span><span className='title_part2'>gos</span></h1>
                <img src={payment} alt="metodos de pago" />
                <div className='slider_payment'>

                </div>
              </div>
              <div className='linked_businesses'>

              </div>
            </MarginLayout>
        </div>
      </section>
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
    </div>
  )
}
