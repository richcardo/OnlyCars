import styled from "@emotion/styled"

export const StyledSearchBar = styled.div`
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.colors.grey[300]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  gap: 10px;
  height: ${({ theme }) => `${theme.sizes.small}px`};
`
