import React from "react"
import styled from "@emotion/styled"

const HeroStyles = styled("div")`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  h1 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  span {
    color: var(--primaryColor);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1100px) {
    h1 {
      font-size: 4rem;
    }
  }
`

const Hero = () => {
  return (
    <HeroStyles>
      <div className="hero-content">
        <h1>
          <span>Hello!</span> We're
          <br /> The Great Dev Co.
        </h1>
        <p>
          We're a web development firm specializing in building really fast,
          highly secure, SEO friendly websites that your customers will love
        </p>
      </div>
    </HeroStyles>
  )
}

export default Hero
