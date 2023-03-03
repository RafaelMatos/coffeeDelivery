import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    gap: 0.5rem;
    height: 2.5rem;

    font-weight: 400;
    font-size: 14px;
    line-height: 130;
    /* flex-direction: row; */

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 5px;
      text-decoration: none;
      gap: 0.25rem;
      height: 2.5rem;

      transition: 0.5s;
    }
    .location {
      background: ${(props) => props.theme['purple-200']};
      color: ${(props) => props.theme['purple-700']};

      &:hover {
        background: ${(props) => props.theme['purple-400']};
        color: ${(props) => props.theme['purple-200']};
      }
    }
    .cart {
      background: ${(props) => props.theme['orange-200']};
      color: ${(props) => props.theme['orange-700']};

      &:hover {
        background: ${(props) => props.theme['orange-400']};
        color: ${(props) => props.theme['orange-200']};
      }
    }
  }
`
