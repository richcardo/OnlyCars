import styled from "@emotion/styled"

export const StyledCarsContainer = styled.div`
  box-sizing: border-box;
  column-gap: 1rem;
  row-gap: 1rem;
  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
