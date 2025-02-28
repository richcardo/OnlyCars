import { BaseButton } from "./styled"
import { ButtonProps } from "./styled"

export const Button = ({
  color = "primary",
  disabled = false,
  reverse,
  variant,
  size = undefined,
  children,
  onClick,
  className,
}: ButtonProps & { children: string; onClick: () => void }) => {
  return (
    <BaseButton
      variant={variant}
      reverse={reverse}
      onClick={onClick}
      disabled={disabled}
      borderRadius="900px"
      color={color}
      size={size}
      className={className}
      ratio="3/1"
    >
      {children}
    </BaseButton>
  )
}
