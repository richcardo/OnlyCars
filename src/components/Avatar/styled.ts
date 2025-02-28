import styled from "@emotion/styled"
import { Size } from "../../style/theme"
type StyledProps = {
  size: Size
}
export const StyledAvatar = styled.img<StyledProps>`
  border-radius: 50%;
  width: ${({ theme, size }) => `${theme.sizes[size]}px`};
  aspect-ratio: 1;
  height: ${({ theme, size }) => `${theme.sizes[size]}px`};
`
