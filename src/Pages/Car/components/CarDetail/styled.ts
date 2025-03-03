import styled from "@emotion/styled"

export const StyledCarDetail = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  justify-content: space-between;
  & h2 {
    font-size: 40px;
  }
`
export const TechnicalDataSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
export const SingleDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
