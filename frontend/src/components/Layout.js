import React from "react"
import { Global, css } from "@emotion/core"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --primaryColor: rgb(288, 50, 71);
            --secondaryColor: rgb(19, 12, 62);
            --lightColor: rgb(248, 248, 255);
            --transition: all 0.3s linear;
            --borderRadius: 3px;
            --darkShadow: 0 5px 15px rgba(255, 255, 255, 0.1);
            --lightShadow: 0 5px 15px rgba(255, 255, 255, 0.2);

            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              font-size: 18px;
              letter-spacing: 1px;
              line-height: 1.5;
              background: var(--secondaryColor);
              color: var(--lightColor);
              font-family: "Quicksand", sans-serif;
            }

            img {
              width: 100%;
            }

            li {
              list-style: none;
              margin-top: 0.25rem;
            }

            a {
              text-decoration: none;
            }

            /* Utility Classes */
            .btn {
              background: transparent;
              border: 1px solid var(--primaryColor);
              padding: 0.375rem 1rem;
              display: inline-block;
              font-size: 0.875rem;
              border-radius: var(--borderRadius);
              box-shadow: 0 1px 3px rgba(255, 255, 255, 02);
              cursor: pointer;
              transition: var(--transition);

              &:hover {
                border: transparent;
                background: var(--primaryColor);
              }
            }

            .btn-center {
              display: block;
              width: 12rem;
              text-align: center;
              margin: 0 auto;
              margin-top: 3rem;
            }

            .underline {
              width: 10rem;
              height: 0.25rem;
              background: var(--primaryColor);
              margin: 0.5rem auto 1rem;
            }
          }
        `}
      />
      <Navbar />
      <main
        css={css`
          margin: 0 auto;
          max-width: 90vw;
          width: 1100px;
        `}
      >
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout
