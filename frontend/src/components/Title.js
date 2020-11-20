import React from 'react'
import styled from '@emotion/styled'

const H2Styles = styled('h2')`
  text-align: center;
  margin-bottom: 5rem;
`

const Title = ({ title, name }) => {
  return (
    <>
      <H2Styles className={name ? 'title' : ''}>{title || 'section'}</H2Styles>
    </>
  )
}

export default Title
