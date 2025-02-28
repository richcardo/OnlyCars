import styled from "@emotion/styled"

export const StyledNewsLetter = styled.div`
  border: ${({ theme }) => `1px solid ${theme.palette.colors.grey[300]}`};
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  & input {
    background-color: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.palette.colors.grey[950]};
      font-weight: lighter;
    }
  }
`
