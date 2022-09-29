import React from 'react'
import MarginLayout from '../Layouts/MarginLayout'
import payment from "../Resources/Imgs/payment.png"
import "../Styles/PagesS/LandingPage.scss"

export const Info = () => {
  return (
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
  )
}
