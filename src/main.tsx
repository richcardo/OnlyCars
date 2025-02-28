import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./style/theme.ts"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
