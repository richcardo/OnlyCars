import styled from "@emotion/styled"

export const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  & .filter-card {
    width: 40%;
  }
  & button {
    position: absolute;
    right: 50%;
    top: 50%;
    box-shadow: ${({ theme }) =>
      `0 0 100px ${theme.palette.colors.primary[400]}`};
    transform: rotate(90deg) translate(-50%, -50%);
  }
`
