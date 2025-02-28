// import { Icon } from "../Icon"
import { BaseButton } from "./styled"
import { ButtonProps } from "./styled"
import { Icon } from "../Icon"
import { SizeProp } from "@fortawesome/fontawesome-svg-core"
import { Color } from "../../style/theme"

export const IconButton = ({
  icon,
  iconColor = "grey",
  color,
  onClick,
  disabled = false,
  variant = "contained",
  reverse,
  size = "small",
  iconSize = "xs",
}: ButtonProps & {
  iconSize?: SizeProp
  icon: Icon
  iconColor?: Color
  onClick: () => void
}) => {
  return (
    <BaseButton
      reverse={reverse}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      borderRadius="50%"
      color={color}
      ratio="1"
      size={size}
    >
      <Icon icon={icon} color={iconColor} size={iconSize} />
    </BaseButton>
  )
}
