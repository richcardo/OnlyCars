import styled from "@emotion/styled"

export const StyledMainContainer = styled.div`
  height: fit-content;
  width: 70%;
  height: 630px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  grid-template-rows: 2fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  & .card {
    grid-row: span 2;
  }
  & .selected {
    border: 3px solid blue;
    border-radius: 30px;
    padding: 1rem;
  }
`
export const MainImageContainer = styled.div`
  grid-column: span 3;
  grid-row: span 1;
  & img {
    width: 100%;
    border-radius: 30px;
  }
`
export const ListImageContainer = styled.div`
  display: flex;
  align-items: end;
  grid-column: span 1;
  grid-row: span 1;
  & img {
    width: 100%;
    border-radius: 30px;
  }
`
export const Container = styled.div`
  grid-row: span 2;
`
