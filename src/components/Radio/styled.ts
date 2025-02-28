import styled from "@emotion/styled"

export const StyledRadio = styled.input`
  accent-color: ${({ theme }) => theme.palette.colors.primary[400]};
`
export const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  & label {
    font-weight: lighter;
  }
`
