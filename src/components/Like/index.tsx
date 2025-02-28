import { IconButton } from "../Button"

export type LikeProps = {
  isLiked: boolean
  setLiked: (bool: boolean) => void
}

export const Like = ({ isLiked, setLiked }: LikeProps) => {
  return (
    <IconButton
      onClick={() => setLiked(!isLiked)}
      variant="text"
      icon={isLiked ? "solidheart" : "heart"}
      iconColor={isLiked ? "danger" : "grey"}
      iconSize="2x"
    />
  )
}
