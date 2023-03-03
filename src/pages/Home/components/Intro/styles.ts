import styled from 'styled-components'

export const IntroContainer = styled.div`
  max-width: 74rem;

  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['gray-300']};

  img {
    height: 22.5rem;
  }
`
