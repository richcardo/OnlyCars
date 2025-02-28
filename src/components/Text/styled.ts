import styled from "@emotion/styled"
import { TextVariant } from "../../style/theme"
import { CSSProperties } from "react"

export type StyledTextProps = {
  shade?: 50 | 400 | 950
  variant?: TextVariant
  textAlign?: CSSProperties["textAlign"]
  size?: number
  textDecoration?: string | number | undefined
  fontWeight?: string | number
  className?: string
}

export const StyledText = styled.text<StyledTextProps>`
  font-weight: ${({ theme, variant = "p" }) =>
    theme.text.variant[variant].fontWeight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ shade = 950, theme }) => theme.palette.colors.grey[shade]};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-family: ${({ theme }) => theme.text.fontFamily};
`
