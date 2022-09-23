import React from 'react'
import { SearchForm } from '../Components/Forms/SearchForm'
import MarginLayout from '../Layouts/MarginLayout'
import "../Styles/PagesS/LandingPage.scss"

export const LandingPage = () => {
  return (
    <div className='Landing'>
      <section className='home'>
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
          <div className='figure_container' />
      </section>
      <section className="info">

      </section>
    </div>
  )
}
