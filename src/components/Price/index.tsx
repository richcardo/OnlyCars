import { StyledPrice } from "./styled"
import { Text } from "../Text"

type Props = {
  daily?: "day" | "days"
  discountedPrice?: number
  price: number | undefined
}

export const Price = ({ daily = "day", discountedPrice, price }: Props) => {
  return (
    <StyledPrice>
      <Text variant="h2">
        {`$${price}/`}
        {daily && (
          <Text variant="span" shade={400}>
            {daily}
          </Text>
        )}
      </Text>
      {discountedPrice && (
        <Text variant="h3" shade={400} textDecoration="line-through">
          {`$${discountedPrice}`}
        </Text>
      )}
    </StyledPrice>
  )
}
