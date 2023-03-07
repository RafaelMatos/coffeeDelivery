import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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

    
`
interface HeaderButtonProps {
  variant: 'purple' | 'orange'
}

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  font-size: 14px;

  ${({ variant }) => css`
    background: ${(props) => props.theme[`${variant}-200`]};
    color: ${(props) => props.theme[`${variant}-700`]};

    transition: 0.5s;

    &:hover {
      background: ${(props) => props.theme[`${variant}-400`]};
      color: ${(props) => props.theme[`${variant}-200`]};
    }
  `}
`
