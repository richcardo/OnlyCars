import styled from "@emotion/styled"

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 1.5rem;
  & input {
    box-shadow: ${({ theme }) => `0 0 40px ${theme.palette.colors.grey[400]}`};
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.2rem;
  width: 100%;
`
export const StyledFormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  width: 100%;
  aspect-ratio: 1/0.9;
  & .loginButton {
    box-shadow: ${({ theme }) =>
      `0 0 20px ${theme.palette.colors.secondary[400]}`};
  }
`
