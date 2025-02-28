import styled from "@emotion/styled"
import { Color, Size } from "../../style/theme"

export type BaseProps = {
  color?: Color
  borderRadius?: string
  ratio?: "1" | "3/1"
  reverse?: boolean
  variant?: "text" | "outlined" | "contained"
  size?: Size
}

export type ButtonProps = BaseProps & {
  disabled?: boolean
  className?: string
}

export const BaseButton = styled.button<BaseProps>`
  border: ${({ variant, color = "primary", theme }) =>
    variant === "outlined"
      ? `3px solid ${theme.palette.colors[color][400]}`
      : "none"};
  border-radius: ${({ borderRadius }) => borderRadius ?? "25px"};
  background-color: ${({
    theme,
    color = "primary",
    reverse = false,
    variant = "contained",
  }) => {
    return variant !== "contained"
      ? "transparent"
      : reverse
        ? theme.palette.colors[color]["contrastText"]
        : theme.palette.colors[color][400]
  }};
  color: ${({
    theme,
    color = "primary",
    reverse = false,
    variant = "contained",
  }) => {
    return variant !== "contained"
      ? theme.palette.colors[color][400]
      : reverse
        ? theme.palette.colors[color][400]
        : theme.palette.colors[color]["contrastText"]
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme, size }) => (size ? `${theme.sizes[size]}px` : "auto")};
  height: ${({ theme, size }) => (size ? `${theme.sizes[size]}px` : "auto")};
  aspect-ratio: ${({ ratio = "3/1" }) => ratio};
  padding: ${({ ratio }) => (ratio === "3/1" ? "1rem 2rem" : "1rem")};
  font-family: ${({ theme }) => theme.text.fontFamily};
  /* font-size: 1.5rem; */
  font-weight: bold;
  cursor: pointer;
`
