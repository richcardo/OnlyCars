import styled from "@emotion/styled"

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & .login {
    width: 20%;
    box-shadow: ${({ theme }) => `0 0 20px ${theme.palette.colors.grey[950]}`};
  }
  background: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.palette.colors.grey[50]} 50%, ${theme.palette.colors.primary[400]} 50%) `};
`
