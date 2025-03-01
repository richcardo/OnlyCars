import { Size } from "../../style/theme"
import { StyledImg } from "./styled"
type ImageProps = {
  imgUrl: string
  size?: Size
  className?: string
}

export const Image = ({ imgUrl, size = "medium", className }: ImageProps) => {
  return <StyledImg className={className} size={size} src={imgUrl} />
}
