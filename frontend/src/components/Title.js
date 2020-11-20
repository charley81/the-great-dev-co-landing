import React from 'react'
import styled from '@emotion/styled'

const TitleStyles = styled('div')`
  text-align: center;
  margin-bottom: 5rem;

  .underline {
    width: 10rem;
    height: 0.25rem;
    background: var(--primaryColor);
    margin: 0.5rem auto 1rem;
  }
`

const Title = ({ title, name }) => {
  return (
    <TitleStyles>
      <h2 className={name ? 'title' : ''}>{title || 'section'}</h2>
      <div className="underline"></div>
    </TitleStyles>
  )
}

export default Title
