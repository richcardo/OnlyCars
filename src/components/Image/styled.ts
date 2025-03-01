import styled from "@emotion/styled"
import { Size } from "../../style/theme"
type StyledProps = {
  size: Size
  className?: string
}

export const StyledImg = styled.img<StyledProps>`
  width: ${({ theme, size }) => `${theme.sizes[size]}px`};
`
