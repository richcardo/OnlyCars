import "@emotion/react"
import { Theme as CustomTheme } from "./style/theme"

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends CustomTheme {}
}
