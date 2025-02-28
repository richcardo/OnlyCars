import styled from "@emotion/styled"

export const Styledfooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.colors.grey["50"]};
  background-image: url("src\assets\Screenshot 2025-02-28 145533.png");
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem 1rem 2rem;
`

export const MainFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  width: 100%;
`
