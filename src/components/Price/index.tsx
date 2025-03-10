import { StyledPrice } from "./styled"
import { Text } from "../Text"

type Props = {
  daily?: "day" | "days"
  discount: number
  price: number
}

export const Price = ({ daily = "day", discount, price }: Props) => {
  const finalPrice = ((100 - discount) / 100) * price
  return (
    <StyledPrice>
      <Text variant="h2">
        {`$${finalPrice}/`}
        {daily && (
          <Text variant="span" shade={400}>
            {daily}
          </Text>
        )}
      </Text>
      {discount !== 0 && (
        <Text variant="h3" shade={400} textDecoration="line-through">
          {`$${price}`}
        </Text>
      )}
    </StyledPrice>
  )
}
