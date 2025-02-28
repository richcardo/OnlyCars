import styled from "@emotion/styled"

export const StyledBadge = styled.span`
  background-color: ${({ theme }) => theme.palette.colors.primary[400]};
  color: ${({ theme }) => theme.palette.colors.grey[50]};
  padding: 0.1rem;
  border-radius: 50%;
  aspect-ratio: 1.2/1;
  text-align: center;
  width: 20px;
`
