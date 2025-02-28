import { Size } from "../../style/theme"
import { StyledAvatar } from "./styled"

type Props = {
  imgUrl: string
  size?: Size
}

export const Avatar = ({ imgUrl, size = "small" }: Props) => {
  return <StyledAvatar src={imgUrl} size={size} />
}
