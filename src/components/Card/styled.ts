import styled from "@emotion/styled"

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.grey[50]};
  border-radius: 15px;
  padding: 1.7rem;
  & img {
    height: auto;
    align-self: center;
  }
`
