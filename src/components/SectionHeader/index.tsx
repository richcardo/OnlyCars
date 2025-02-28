import { Text } from "../Text"
import { StyledHeader, StyledTitle } from "./styled"
import { ReactNode } from "react"

type Props = {
  title: string
  icon?: ReactNode
  subtitle?: string
  rightElement?: ReactNode
}

export const SectionHeader = ({
  title,
  subtitle,
  rightElement,
  icon,
}: Props) => {
  return (
    <StyledHeader>
      <StyledTitle icon={icon}>
        {icon && icon}
        <Text variant="h2">{title}</Text>
        {rightElement}
      </StyledTitle>

      <Text variant="h3" shade={400} textAlign="start">
        {subtitle}
      </Text>
    </StyledHeader>
  )
}
