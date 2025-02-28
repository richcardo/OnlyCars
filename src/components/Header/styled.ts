import styled from "@emotion/styled"

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.colors.grey["50"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: 60px;
  & .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    width: 40%;
  }
  & .searchBar {
    width: 60%;
  }
  & .user {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
  }

  & .avatar {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`
