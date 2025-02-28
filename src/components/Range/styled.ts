import styled from "@emotion/styled"

export const StyledRange = styled.input`
  accent-color: ${({ theme }) => theme.palette.colors.primary[400]};
  &:focus-visible {
    outline: none;
  }
  &::webkit-slider-thumb {
    border: 2px solid;
    cursor: pointer;
  }
`
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  font-weight: regular;
`
