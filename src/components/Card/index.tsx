import { ReactNode } from "react"
import { Color } from "../../style/theme"

import { StyledCard } from "./styled"

type Props = {
  color?: Color
  children: ReactNode
  className?: string
}

export const Card = ({ color = "grey", children, className }: Props) => {
  return (
    <StyledCard color={color} className={className}>
      {children}
    </StyledCard>
  )
}
