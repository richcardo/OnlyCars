import styled from "@emotion/styled"

type InputProps = {
  backgroundShade?: 50 | 300 | 400 | 950
}

export const StyledInput = styled.input<InputProps>`
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  background-color: ${({ theme, backgroundShade = 300 }) =>
    theme.palette.colors.grey[backgroundShade]};
  font-family: ${({ theme }) => theme.text.fontFamily};
  &:focus-visible {
    outline: none;
  }
  font-weight: bold;
  color: ${({ theme }) => theme.palette.colors.grey[400]};
  &::placeholder {
    color: ${({ theme }) => theme.palette.colors.grey[400]};
  }
`
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  width: 100%;
`
