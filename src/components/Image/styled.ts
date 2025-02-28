import styled from "@emotion/styled"
import { Size } from "../../style/theme"
type StyledProps = {
  size: Size
}

export const StyledImg = styled.img<StyledProps>`
  width: ${({ theme, size }) => `${theme.sizes[size]}px`};
`
