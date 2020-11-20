import React from 'react'
import Title from './Title'
import services from '../constants/services'
import styled from '@emotion/styled'

const ItemsStyles = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  article {
    border-bottom: 1px dotted var(--lightColor);
    padding-bottom: 1rem;
  }

  h3 {
    color: var(--primaryColor);
  }
`

const Services = () => {
  return (
    <div>
      <Title title="Services" />
      <ItemsStyles>
        {services.map(service => {
          const { id, title, text } = service

          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          )
        })}
      </ItemsStyles>
    </div>
  )
}

export default Services
