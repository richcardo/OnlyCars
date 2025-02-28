import styled from "@emotion/styled"

export const StyledSelect = styled.select`
  outline: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.palette.colors.grey[400]};
`

export const SelectContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: start;
`
