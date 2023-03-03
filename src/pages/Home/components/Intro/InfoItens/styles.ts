import styled from 'styled-components'

export const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 37rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const TitleContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.25rem;
  width: 35.4375rem;

  justify-items: left;
`
export const RowItem = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  /* justify-content: space-between; */
`

const BG_COLOR = {
  orange: 'orange-400',
  darkOrange: 'orange-700',
  purple: 'purple-400',
  gray: 'gray-700',
} as const

interface ItemProps {
  backgroundColor: keyof typeof BG_COLOR
}

export const Item = styled.div<ItemProps>`
  margin-top: 1rem;

  font-size: 1rem;
  width: 18.375rem;
  gap: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme[BG_COLOR[props.backgroundColor]]};
    border-radius: 1000px;
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
`
