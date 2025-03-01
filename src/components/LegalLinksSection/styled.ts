import styled from "@emotion/styled"

export const StyledLegalSection = styled.section`
  display: flex;
  justify-content: space-between;
  & button {
    color: ${({ theme }) => theme.palette.colors.grey[950]};
  }
  z-index: 2;
`
