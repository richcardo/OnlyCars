import { Size } from "../../style/theme"
import { StyledImg } from "./styled"
type ImageProps = {
  imgUrl: string
  size?: Size
}

export const Image = ({ imgUrl, size = "medium" }: ImageProps) => {
  return <StyledImg size={size} src={imgUrl} />
}
