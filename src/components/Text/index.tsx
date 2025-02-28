import { StyledText, StyledTextProps } from "./styled"
import { theme } from "../../style/theme"
import { PropsWithChildren } from "react"

export const Text = ({
  children,
  variant = "h1",
  shade = 950,
  className,
  ...rest
}: PropsWithChildren<StyledTextProps>) => {
  const Wrapper = StyledText.withComponent(variant)
  return (
    <Wrapper
      size={theme.text.variant[variant].fontSize}
      shade={shade}
      className={className}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}
