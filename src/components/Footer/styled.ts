import styled from "@emotion/styled"

export const Styledfooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.colors.grey["50"]};
  /* background-image: url("src/assets/Screenshot 2025-02-28 145533.png");
  background-repeat: no-repeat;
  background-position: center; */
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  position: relative;
  padding: 4rem 4rem;
  height: max-content;
  & img.background {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 40%;
    opacity: 0.07;
  }
  & hr {
    color: ${({ theme }) => theme.palette.colors.grey[300]};
    width: 100%;
    background-color: ${({ theme }) => theme.palette.colors.grey[300]};
    z-index: 2;
  }
`

export const MainFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  width: 100%;
`
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
