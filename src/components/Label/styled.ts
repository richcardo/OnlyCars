import styled from "@emotion/styled"

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.palette.colors.grey[950]};
  font-weight: bold;
  font-family: ${({ theme }) => theme.text.fontFamily} & p {
    color: ${({ theme }) => theme.palette.colors.grey[400]};
  }
`
