import React from 'react'
import { Container, Row } from "react-bootstrap";
import hero from "../../assets/hero-banner.png";
import './Games.scss'

const Games = () => {
  return (
    <main>
      <Container fluid className="px-0">
      <img className='hero' src={hero} alt='hero'/>
        <Row className='games_search'>  
          <h1 class="d-flex justify-content-center">Lorem ipsum dolor sit amet consectetur</h1>
          <p class="d-flex justify-content-center mb-3">With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
          <form class="d-flex justify-content-center" role="search">
          <button class="btn" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-search text-dark"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
              <input
                class="form-control me-2 search-web"
                id="searchTerm"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              
              </form>
        </Row>
      </Container>

      <Container>
        <Row >
          
        </Row>
        <Row>
          
        </Row> 
      </Container>
    </main>
  )
}

export default Games
