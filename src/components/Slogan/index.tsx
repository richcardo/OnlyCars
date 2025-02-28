import { StyledSlogan } from "./styled"
import { Image } from "../Image"
import { Text } from "../Text"

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Image
        size={"medium"}
        imgUrl="src\assets\Screenshot 2025-02-28 145533.png"
      />
      <Text variant="h3" className="text">
        Our Vision is to deliver convenience while driving growth and boosting
        your business sales.
      </Text>
    </StyledSlogan>
  )
}
