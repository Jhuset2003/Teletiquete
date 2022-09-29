import React from 'react'
import { SearchForm } from '../Components/Forms/SearchForm'
import { Nav } from '../Components/Nav/Nav'
import "../Styles/PagesS/LandingPage.scss"
export const Home = () => {
  return (
    <div className='Landing'>
        <section className='home' id='Home'>
      <section className='nav_container'>
        <Nav/>
      </section>

              <div className='home_elements_container'>
                  <div className='title_container'>
                      <h1>¿A Donde Deseas <span className='title_part1'>Via</span><span className='title_part2'>jar</span>?</h1>
                  </div>
                  <div className='form_container'>
                    <SearchForm/>
                  </div>
              </div>
          <footer className='figure_container' />
      </section>
    </div>
    
  )
}
